// ─────────────────────────────────────────────────────────────────────────────
// OptiVantage CRM — HubSpot API Wrapper
// Uses HubSpot Contacts v3 API with a Private App token.
// No heavy SDK — just typed fetch calls.
// ─────────────────────────────────────────────────────────────────────────────

import type { HubSpotContactProperties, LeadScore } from './types';

const BASE_URL = 'https://api.hubapi.com';

function headers() {
  const token = process.env.HUBSPOT_API_KEY;
  if (!token || token === 'your_hubspot_private_app_token_here') {
    // Not yet configured — skip silently in dev
    return null;
  }
  return {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };
}

// ─────────────────────────────────────────────
// Create or update a contact
// Uses the upsert-by-email endpoint so duplicate contacts are merged.
// ─────────────────────────────────────────────
export async function upsertContact(
  props: HubSpotContactProperties
): Promise<{ id?: string; error?: string }> {
  const h = headers();
  if (!h) return { id: 'skipped-no-api-key' };

  try {
    const res = await fetch(`${BASE_URL}/crm/v3/objects/contacts`, {
      method: 'POST',
      headers: h,
      body: JSON.stringify({
        properties: {
          email: props.email,
          firstname: props.firstname ?? '',
          lastname: props.lastname ?? '',
          phone: props.phone ?? '',
          company: props.company ?? '',
          // Custom properties — must be created in HubSpot first
          quiz_score: props.quiz_score ?? '',
          quiz_tier: props.quiz_tier ?? '',
          primary_pillar: props.primary_pillar ?? '',
          lead_qualification: props.lead_qualification ?? '',
          company_size_bucket: props.company_size_bucket ?? '',
          industry_vertical: props.industry_vertical ?? '',
          lead_source_detail: props.lead_source_detail ?? '',
          quiz_answers_json: props.quiz_answers_json ?? '',
          resource_downloaded: props.resource_downloaded ?? '',
          service_interest: props.service_interest ?? '',
        },
      }),
    });

    if (res.status === 409) {
      // Contact already exists — update by email instead
      return await updateContactByEmail(props.email, props);
    }

    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      console.error('[HubSpot] create contact failed:', body);
      return { error: body?.message ?? 'create failed' };
    }

    const body = await res.json();
    return { id: body.id };
  } catch (err) {
    console.error('[HubSpot] network error:', err);
    return { error: String(err) };
  }
}

// ─────────────────────────────────────────────
// Update existing contact by email
// ─────────────────────────────────────────────
export async function updateContactByEmail(
  email: string,
  props: Partial<HubSpotContactProperties>
): Promise<{ id?: string; error?: string }> {
  const h = headers();
  if (!h) return { id: 'skipped-no-api-key' };

  try {
    // First, get the contact ID by email
    const searchRes = await fetch(
      `${BASE_URL}/crm/v3/objects/contacts/search`,
      {
        method: 'POST',
        headers: h,
        body: JSON.stringify({
          filterGroups: [
            {
              filters: [
                { propertyName: 'email', operator: 'EQ', value: email },
              ],
            },
          ],
          properties: ['hs_object_id'],
          limit: 1,
        }),
      }
    );

    const searchBody = await searchRes.json();
    const contactId = searchBody?.results?.[0]?.id;
    if (!contactId) return { error: 'contact not found for update' };

    // Now patch it
    const patchRes = await fetch(
      `${BASE_URL}/crm/v3/objects/contacts/${contactId}`,
      {
        method: 'PATCH',
        headers: h,
        body: JSON.stringify({ properties: props }),
      }
    );

    if (!patchRes.ok) {
      const body = await patchRes.json().catch(() => ({}));
      return { error: body?.message ?? 'update failed' };
    }

    return { id: contactId };
  } catch (err) {
    console.error('[HubSpot] update error:', err);
    return { error: String(err) };
  }
}

// ─────────────────────────────────────────────
// Create a deal linked to a contact
// ─────────────────────────────────────────────
export async function createDeal(
  contactId: string,
  dealName: string,
  stage: string = 'appointmentscheduled'
): Promise<{ id?: string; error?: string }> {
  const h = headers();
  if (!h) return { id: 'skipped-no-api-key' };

  try {
    const res = await fetch(`${BASE_URL}/crm/v3/objects/deals`, {
      method: 'POST',
      headers: h,
      body: JSON.stringify({
        properties: {
          dealname: dealName,
          dealstage: stage,
          pipeline: 'default',
        },
        associations: [
          {
            to: { id: contactId },
            types: [
              {
                associationCategory: 'HUBSPOT_DEFINED',
                associationTypeId: 3, // Deal → Contact
              },
            ],
          },
        ],
      }),
    });

    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      return { error: body?.message ?? 'deal creation failed' };
    }

    const body = await res.json();
    return { id: body.id };
  } catch (err) {
    return { error: String(err) };
  }
}

// ─────────────────────────────────────────────
// Build HubSpot contact properties from a lead score
// ─────────────────────────────────────────────
export function scoreToHubSpotProps(
  score: LeadScore,
  source: string,
  extraProps?: Partial<HubSpotContactProperties>
): Partial<HubSpotContactProperties> {
  return {
    quiz_score: String(score.total),
    quiz_tier: score.advisoryTier ? String(score.advisoryTier) : '',
    primary_pillar: score.primaryPillar,
    lead_qualification: score.qualificationLevel,
    lead_source_detail: source,
    ...extraProps,
  };
}
