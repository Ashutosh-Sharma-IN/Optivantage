"use client";
import Navbar from '@/components/Navbar';
import { TrendingUp, Users, Cpu, Shield, CheckCircle2 } from 'lucide-react';

const studies = [
  {
    tag: "Logistics & Warehousing",
    title: "WiFi Optimization for 15 Logistics Warehouses",
    desc: "Transforming warehouse operations through RF engineering and network optimization",
    challenge: ["15 logistics warehouses experiencing severe connectivity issues", "2 hours of daily downtime affecting operations", "1,500+ monthly support tickets related to WiFi issues", "Scanner uptime at only 88%, impacting productivity"],
    solution: ["Comprehensive Site Surveys using Ekahau Pro", "RF Heat Mapping: Detailed RF heat maps to identify dead zones", "AP Density Optimization: Optimal placement with 1 AP per 1,000 ft² coverage", "Channel Planning: Strategic channel allocation to minimize interference", "Power Optimization: Fine-tuned transmit power levels"],
    metrics: [
      { val: "98%", label: "Scanner Uptime" },
      { val: "25%", label: "Reduced Disruptions" },
      { val: "$118.8K", label: "Project Budget" },
      { val: "16", label: "Weeks Delivery" },
      { val: "-70%", label: "Support Tickets" },
      { val: "$200K", label: "Annual Savings" }
    ]
  },
  {
    tag: "Retail",
    title: "SD-WAN Migration for 200+ Retail Sites",
    desc: "Modernizing network infrastructure for enhanced performance and cost efficiency",
    challenge: ["200+ retail locations with legacy MPLS infrastructure", "120ms average latency to cloud applications", "$2,000 per site per month in connectivity costs", "Static routing unable to adapt to traffic patterns"],
    solution: ["Phased SD-WAN Rollout: Strategic 6-month migration plan", "Application-Aware Routing: Intelligent traffic steering", "Dual Internet Links: Primary broadband + backup 4G/LTE", "Zero-Touch Provisioning: Automated device configuration"],
    metrics: [
      { val: "50%", label: "Latency Reduced" },
      { val: "40%", label: "OpEx Savings" },
      { val: "<2hr", label: "Cutover/Site" },
      { val: "99.9%", label: "Uptime SLA" },
      { val: "6", label: "Month Timeline" },
      { val: "$960K", label: "Annual Savings" }
    ]
  },
  {
    tag: "Enterprise IT Operations",
    title: "AI-Powered NOC Transformation",
    desc: "Leveraging machine learning for proactive incident management and self-healing",
    challenge: ["Manual incident detection across 5,000+ monitored devices", "4-hour mean time to detect (MTTD) for critical issues", "High false-positive rates overwhelming NOC team", "Reactive approach leading to prolonged outages"],
    solution: ["ML Anomaly Detection: Real-time anomaly detection using machine learning", "Self-Healing Playbooks: Automated remediation using Ansible", "AIOps Integration: Integration with ServiceNow for intelligent ticketing", "Predictive Analytics: Forecasting potential failures before they occur"],
    metrics: [
      { val: "60%", label: "Reduced MTTD" },
      { val: "40%", label: "Auto-Classified" },
      { val: "30%", label: "Reduced Costs" },
      { val: "85%", label: "Prediction Accuracy" },
      { val: "1.6hr", label: "New MTTD" },
      { val: "50%", label: "Reduced Manual Work" }
    ]
  },
  {
    tag: "Cybersecurity",
    title: "AI-Enhanced Security & Service Management",
    desc: "Transforming security operations with machine learning and intelligent automation",
    challenge: ["10,000+ security alerts daily overwhelming SOC team", "95% false-positive rate causing alert fatigue", "Manual triage consuming 70% of analyst time", "Average 8-hour response time for genuine threats"],
    solution: ["ML-Driven Detection: Random Forest and Deep Neural Networks", "SOAR Integration: Security Orchestration, Automation, and Response", "NLP Chatbot: Natural language processing for L1 support", "Threat Intelligence: Integration with global threat feeds"],
    metrics: [
      { val: "80%", label: "Detection Accuracy" },
      { val: "50%", label: "Reduced False Positives" },
      { val: "50%", label: "L1 Automation" },
      { val: "45%", label: "Reduced Handling Time" },
      { val: "2.5hr", label: "Response Time" },
      { val: "$400K", label: "Annual Savings" }
    ]
  },
  {
    tag: "Network Operations",
    title: "AI-Driven Capacity Planning & Optimization",
    desc: "Predictive analytics for proactive network capacity management",
    challenge: ["Static capacity planning leading to over/under-provisioning", "Reactive scaling causing performance degradation", "Manual forecasting taking 40+ hours per quarter", "Inability to predict seasonal traffic patterns"],
    solution: ["Time-Series Forecasting: Prophet and LSTM models for traffic prediction", "Dynamic Scaling: Automated capacity adjustments based on predictions", "Multi-Variate Analysis: Correlation of network metrics with business KPIs"],
    metrics: [
      { val: "±5%", label: "Prediction Accuracy" },
      { val: "15min", label: "Scaling Time" },
      { val: "98%", label: "Uptime" },
      { val: "35%", label: "Reduced CapEx" },
      { val: "90%", label: "Reduced Planning Time" },
      { val: "$500K", label: "Annual Savings" }
    ]
  }
];

export default function CaseStudies() {
  return (
    <main>
      <Navbar />
      <section className="pt-32 pb-16 px-4 bg-navy-900 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Proven Results</h1>
        <p className="text-xl text-text-muted max-w-3xl mx-auto">
          Real-world case studies demonstrating quantified impact across infrastructure optimization and AI transformation.
        </p>
      </section>

      <section className="py-20 px-4 max-w-7xl mx-auto">
        {studies.map((study, i) => (
          <div key={i} className="bg-navy-800 rounded-2xl p-8 mb-12 border border-white/5">
            <div className="mb-6">
              <span className="text-brand text-sm font-bold uppercase tracking-wide">{study.tag}</span>
              <h2 className="text-3xl font-bold text-white mt-2">{study.title}</h2>
              <p className="text-text-muted">{study.desc}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {/* CHALLENGE & SOLUTION */}
              <div className="md:col-span-2 space-y-8">
                 <div className="bg-navy-900 p-6 rounded-lg border-l-4 border-red-500">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><AlertTriangle className="text-red-500"/> Challenge</h3>
                    <ul className="space-y-2 text-text-muted">
                        {study.challenge.map((item, idx) => <li key={idx}>• {item}</li>)}
                    </ul>
                 </div>

                 <div className="bg-navy-900 p-6 rounded-lg border-l-4 border-green-500">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><CheckCircle2 className="text-green-500"/> Solution</h3>
                    <ul className="space-y-2 text-text-muted">
                        {study.solution.map((item, idx) => <li key={idx} className="font-semibold text-white mb-1">• {item}</li>)}
                    </ul>
                 </div>
              </div>

              {/* METRICS GRID */}
              <div className="md:col-span-1">
                <div className="bg-navy-900 p-6 rounded-lg border border-white/5 h-full">
                    <h3 className="text-white font-semibold mb-4 text-center">Results</h3>
                    <div className="grid grid-cols-2 gap-4">
                        {study.metrics.map((metric, idx) => (
                            <div key={idx} className="text-center bg-navy-800 p-4 rounded border border-white/5">
                                <div className="text-2xl font-bold text-brand">{metric.val}</div>
                                <div className="text-xs text-text-muted mt-1">{metric.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="py-20 px-4 bg-navy-800 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Ready for Similar Results?</h2>
        <p className="text-text-muted mb-8 max-w-2xl mx-auto">
          Let's discuss how we can replicate these outcomes for your organization.
        </p>
        <div className="inline-block px-8 py-3 bg-brand hover:bg-brand-hover text-white font-semibold rounded-lg">
             Schedule a Consultation
        </div>
      </section>
    </main>
  );
}
