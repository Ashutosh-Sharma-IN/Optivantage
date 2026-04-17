# OptiVantage Website - Project Context

**Last Updated**: February 2, 2026
**Project Location**: `C:\Users\ashu1\Downloads\Optivantage\Optivantage-main`
**GitHub Repository**: https://github.com/Ashutosh-Sharma-IN/Optivantage

---

## IMPORTANT: Project Directory

**Correct Directory**: `C:\Users\ashu1\Downloads\Optivantage\Optivantage-main`

⚠️ **Always use this directory for all OptiVantage website work** ⚠️

DO NOT use:
- ❌ `C:\Users\ashu1\OneDrive\Entrepreneur\OptiVantage\Z AI website files`
- ❌ `C:\Users\ashu1\OneDrive\Entrepreneur\OptiVantage\Website files Claude`

---

## Project Overview

**Company**: OptiVantage Technologies Private Limited
**Type**: IT Services & Consulting Company
**Tech Stack**: Next.js 15 + TypeScript + Tailwind CSS
**Location**: Dwarka, New Delhi, India

---

## Company Registration Details

### Legal Information
- **Full Company Name**: OPTIVANTAGE TECHNOLOGIES PRIVATE LIMITED
- **CIN**: U62099DL2025PTC457949
- **Incorporation Date**: 11/11/2025
- **Registered Office**: S.F.S Flat No-159, SF, CAT-III, Sector-9, Pkt-1, Dwarka, South West Delhi, Delhi-110077

### Tax Registration
- **GST Number**: 07AAECO9369B1ZA
- **GST Registration Date**: 26/11/2025
- **Period of Validity**: From 26/11/2025

### MSME/Udyam Registration
- **Udyam Registration Number**: UDYAM-DL-10-0106857
- **Registration Date**: 18/12/2025
- **Enterprise Type**: Micro Enterprise
- **Classification**: Services - Computer programming, consultancy and related activities
- **NIC Codes**:
  - 62013 - Providing software support and maintenance to the clients
  - 62099 - Other information technology and computer service activities n.e.c

### Directors
1. **Ashutosh Sharma** - Director
2. **Akanksha Singh** - Director (DIN: 11376859)

### Banking Details
- **Bank Name**: HDFC Bank
- **IFSC Code**: HDFC0000924
- **Account Number**: 50200114507376

### Contact Information
- **Email**: contact@optivantage.in
- **Phone**:
  - +91 9971701239
  - +91 9871222319
- **Website**: www.optivantage.in

---

## Company Profile

### ⚠️ IMPORTANT: April 2026 Strategic Revamp
Services consolidated from 5 → 3 focused areas. Removed: Cybersecurity & Compliance, Market Activation, Managed IT Services (as standalone), Process Improvement.

**New 3 Pillars:**
1. AI Training & Advisory (slug: `ai-training-advisory`)
2. IT Infrastructure (slug: `it-infrastructure`)
3. IT Equipment & Rentals (slug: `it-equipment-rentals`)

**Partners added:** Cisco (Registered Partner via Ingram Micro India), Vertiv (Authorised Reseller), Fortinet, Palo Alto Networks
**Blog added:** `/blog` index + `/blog/[slug]` posts. Data file: `src/lib/blog-data.ts`
**New tagline:** "AI. Infrastructure. Equipment. Three things we do exceptionally well."

---

## Core Services (3 Focused Areas — post April 2026 revamp)

1. **Cybersecurity & Compliance**
   - ISO 27001/27002, SOX, GDPR, NIST frameworks
   - Security monitoring and incident response
   - Vulnerability assessments and penetration testing
   - Security awareness training and certification
   - Compliance audit and gap analysis

2. **AI Advisory & Training**
   - AI+ Certifications: Everyone, Executive, Prompt Engineer, Ethics
   - Microsoft AI ecosystem (Azure AI, Copilot)
   - Google AI platforms (Gemini, Vertex AI)
   - Agentic AI and autonomous systems
   - Executive AI strategy consulting

3. **IT Infrastructure Management**
   - Network infrastructure design and implementation
   - SITC (System Integration, Testing, and Commissioning)
   - WiFi optimization and network security
   - SD-WAN and cloud connectivity
   - Equipment rental and AMC services

4. **Managed IT Services**
   - 24/7 L1-L3 technical support
   - ITIL-based service management
   - Aviation IT specialists
   - Process improvement and optimization
   - Offshore BOT (Build-Operate-Transfer) models

5. **Market Activation**
   - Go-to-market strategy for SaaS/AI products
   - Lead generation and sales enablement
   - Market analysis and competitive intelligence
   - Partner ecosystem development
   - Growth strategy and scaling advisory

### Key Statistics
- **25+ years** of experience in IT service management
- **500+ enterprise clients** served
- **50+ industry experts** on team
- **98% client satisfaction** rate

### Client Portfolio

**Trusted by**:
- Hexaware (IT services)
- Infogain (software engineering)
- Kotak Mahindra (banking & financial services)
- MSME India (government)
- upGrad (edtech)

### Industries Served
- Banking & Financial Services
- Technology & Software
- Manufacturing
- Healthcare
- Retail & E-commerce
- Education
- Government
- Aviation

---

## Website Technical Details

### Technology Stack
- **Framework**: Next.js 15.0.0
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel (auto-deploys from GitHub main branch)

### Project Structure
```
Optivantage-main/
├── src/
│   ├── app/
│   │   ├── page.tsx                    # Home page
│   │   ├── layout.tsx                  # Root layout with footer (REGISTRATION DETAILS HERE)
│   │   ├── globals.css                 # Global styles
│   │   ├── about/
│   │   │   └── page.tsx                # About page
│   │   ├── services/
│   │   │   ├── page.tsx                # Services overview
│   │   │   └── [slug]/page.tsx         # Individual service pages
│   │   ├── case-studies/
│   │   │   └── page.tsx                # Case studies page
│   │   └── contact/
│   │       └── page.tsx                # Contact page
│   └── components/                     # Reusable components
├── public/                             # Static assets (images, logos)
├── next.config.ts                      # Next.js configuration
├── tailwind.config.ts                  # Tailwind CSS configuration
├── tsconfig.json                       # TypeScript configuration
├── package.json                        # Dependencies
├── GST certificate.pdf                 # Company GST registration certificate
├── Udhyam certificate.pdf              # Company Udyam/MSME certificate
└── CONTEXT.md                          # This file
```

### Key Files

**Layout (Footer with Registration Details)**:
- File: `src/app/layout.tsx`
- Line 134-159: Footer section
- Line 151-157: Company registration details (CIN, GST, Udyam)

**Homepage**:
- File: `src/app/page.tsx`
- Contains: Hero section, services overview, client logos

**Styling**:
- File: `src/app/globals.css`
- Custom CSS variables for brand colors

### Brand Colors
- **Navy Blue**: `#1a365d` (Primary)
- **Orange**: `#FF6B35` (Accent/Brand)
- **Background**: `#0a1628` (Dark navy)
- **Text**: White and gray variations

---

## Recent Updates

### Latest Commit (849eff9e)
**Date**: February 2, 2026
**Changes**: Added company registration details to footer
**Modified Files**:
- `src/app/layout.tsx` - Added CIN, GST No, and Udyam No to footer

**Registration Details Added**:
```tsx
<div className="text-center pt-4 border-t border-white/5">
  <p className="text-xs text-gray-500">
    CIN: U62099DL2025PTC457949 | GST No: 07AAECO9369B1ZA | Udyam No: UDYAM-DL-10-0106857
  </p>
</div>
```

---

## Git & Deployment

### GitHub Repository
- **URL**: https://github.com/Ashutosh-Sharma-IN/Optivantage
- **Branch**: main
- **Auto-Deploy**: Yes (Vercel connected)

### Common Git Commands
```bash
# Navigate to project
cd "C:\Users\ashu1\Downloads\Optivantage\Optivantage-main"

# Check status
git status

# Add changes
git add .

# Commit changes
git commit -m "Description of changes

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"

# Push to GitHub
git push origin main
```

### Deployment
- **Platform**: Vercel
- **Auto-Deploy**: Enabled (deploys on push to main branch)
- **Build Command**: `npm run build`
- **Output Directory**: `.next`

---

## Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

---

## Important Notes

### Footer Registration Details
The footer in `src/app/layout.tsx` displays mandatory company registration information:
- CIN (Corporate Identity Number)
- GST (Goods and Services Tax) registration number
- Udyam (MSME) registration number

**Why this matters**:
- Legal compliance requirement
- Builds trust with visitors
- Required for government contracts
- Professional credibility

### Google Analytics
- **Tracking ID**: G-NG6P0WPYQ0
- **Location**: Configured in `src/app/layout.tsx`
- **Type**: GA4 (Google Analytics 4)

---

## Quick Reference

### Contact Details
- **Email**: contact@optivantage.in
- **Phone 1**: +91 9971701239
- **Phone 2**: +91 9871222319
- **Address**: 159, Sector 9, DDA, Dwarka, New Delhi 110077, India

### Registration Numbers (Display in Footer)
- **CIN**: U62099DL2025PTC457949
- **GST**: 07AAECO9369B1ZA
- **Udyam**: UDYAM-DL-10-0106857

### Links
- **GitHub**: https://github.com/Ashutosh-Sharma-IN/Optivantage
- **Website**: www.optivantage.in
- **LinkedIn**: [To be added]

---

## Support & Documentation

### For Website Updates
1. Navigate to correct directory: `C:\Users\ashu1\Downloads\Optivantage\Optivantage-main`
2. Make changes to relevant files
3. Test locally with `npm run dev`
4. Commit and push to GitHub
5. Vercel will auto-deploy to production

### For Registration Updates
If company registration details change:
1. Update `src/app/layout.tsx` (around line 151-157)
2. Update this CONTEXT.md file
3. Commit and push changes

### Certificate Files
Both registration certificates are stored in the project root:
- `GST certificate.pdf` - GST registration
- `Udhyam certificate.pdf` - MSME/Udyam registration

---

**Last Updated**: February 2, 2026
**Maintained by**: Ashutosh Sharma
**Assisted by**: Claude Sonnet 4.5
