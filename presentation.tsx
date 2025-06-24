"use client"

import { useState } from "react"
import {
  ChevronLeft,
  ChevronRight,
  TrendingDown,
  TrendingUp,
  AlertTriangle,
  Target,
  Users,
  Calendar,
  Building2,
  DollarSign,
  Gauge,
  Shield,
  Zap,
  LineChart,
  CheckCircle,
  Clock,
  AlertCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart as RechartsLineChart, Line, PieChart, Pie, Cell } from "recharts"

const chartData = [
  {
    name: "Existing Debt",
    amount: 16000,
    color: "#dc2626",
  },
  {
    name: "Emergency Loan",
    amount: 3000,
    color: "#ea580c",
  },
  {
    name: "Transaction Costs",
    amount: 100,
    color: "#d97706",
  },
]

const financialProjectionData = [
  { year: "2024", debt: 19100, revenue: 2100, costs: 1900, netPosition: 200 },
  { year: "2025", debt: 18200, revenue: 2200, costs: 1850, netPosition: 350 },
  { year: "2026", debt: 17100, revenue: 2350, costs: 1800, netPosition: 550 },
  { year: "2027", debt: 15800, revenue: 2500, costs: 1750, netPosition: 750 },
  { year: "2028", debt: 14200, revenue: 2650, costs: 1700, netPosition: 950 },
]

const riskMatrix = [
  { risk: "Financial Default", probability: "High", impact: "Critical", mitigation: "Emergency funding secured, debt restructuring plan" },
  { risk: "Regulatory Action", probability: "Medium", impact: "High", mitigation: "Enhanced compliance program, proactive engagement" },
  { risk: "Service Disruption", probability: "Medium", impact: "High", mitigation: "Infrastructure investment prioritization" },
  { risk: "Reputational Damage", probability: "High", impact: "Medium", mitigation: "Strategic communications plan, transparency initiatives" },
]

export default function ThamesWaterPresentation() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    // Slide 1: Title Slide
    {
      title: "Thames Water: Strategic Turnaround & Financial Restructuring Plan",
      content: (
        <div className="flex flex-col items-center justify-center h-full text-center space-y-8">
          <div className="space-y-6">
            <div className="space-y-2">
              <Badge variant="outline" className="text-sm font-medium px-4 py-2 mb-4">CONFIDENTIAL - EXECUTIVE BRIEFING</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">Thames Water Utilities Limited</h1>
              <div className="w-32 h-1 bg-blue-600 mx-auto my-4"></div>
              <h2 className="text-2xl md:text-3xl font-semibold text-blue-900">Strategic Turnaround & Financial Restructuring Plan</h2>
              <p className="text-xl text-slate-700 max-w-3xl mx-auto">Comprehensive Recovery Strategy for Sustainable Long-Term Viability</p>
            </div>
          </div>
          <div className="space-y-6 text-lg bg-slate-50 p-8 rounded-lg border">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="font-semibold text-slate-800">Presented by:</p>
                <p className="text-slate-700">Strategic Advisory Consultants</p>
                <p className="text-sm text-slate-600">Mario Pinzon | Timothy V. | Soufiane D.</p>
              </div>
              <div>
                <p className="font-semibold text-slate-800">Executive Audience:</p>
                <p className="text-slate-700">Board of Directors & C-Suite</p>
                <p className="text-sm text-slate-600">{new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    // Slide 2: Executive Summary
    {
      title: "Executive Summary",
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-red-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-6 w-6 text-red-600" />
                  Financial Position Analysis
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-red-800">Total Debt Exposure</span>
                      <Badge variant="destructive" className="text-xs">CRITICAL</Badge>
                    </div>
                    <p className="text-2xl font-bold text-red-700">£19.1bn</p>
                    <p className="text-sm text-red-600">Including £3bn emergency facility</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                    <span className="font-semibold text-orange-800">Financing Costs</span>
                    <div className="mt-2 space-y-1">
                      <p className="text-sm">• 9.75% p.a. on emergency facility</p>
                      <p className="text-sm">• £100m+ transaction and advisory fees</p>
                      <p className="text-sm">• Debt service ratio: 85% of EBITDA</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-6 w-6 text-blue-600" />
                  Strategic Objectives & Mandate
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Primary Mandate</h4>
                    <p className="text-sm text-blue-700">
                      Execute comprehensive financial restructuring and operational transformation 
                      to ensure regulatory compliance and long-term financial sustainability.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Success Metrics</h4>
                    <div className="text-sm text-green-700 space-y-1">
                      <p>• Achieve investment grade credit rating by 2027</p>
                      <p>• Reduce net debt to £12bn within 36 months</p>
                      <p>• Maintain 100% regulatory compliance</p>
                      <p>• Restore stakeholder confidence</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="bg-slate-50 border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-6 w-6 text-slate-700" />
                High Court Approved Emergency Facility - Key Terms
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-white rounded-lg">
                  <p className="text-2xl font-bold text-slate-800">£3.0bn</p>
                  <p className="text-sm text-slate-600">Facility Amount</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <p className="text-2xl font-bold text-orange-600">9.75%</p>
                  <p className="text-sm text-slate-600">Interest Rate p.a.</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <p className="text-2xl font-bold text-red-600">18 months</p>
                  <p className="text-sm text-slate-600">Initial Term</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <p className="text-2xl font-bold text-blue-600">Monthly</p>
                  <p className="text-sm text-slate-600">Drawdown Basis</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ),
    },
    // Slide 3: The Loan Details & Implications
    {
      title: "The Loan: Details & Implications",
      content: (
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Loan Specifics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                  <span className="font-semibold">Amount:</span>
                  <span className="text-xl font-bold text-blue-600">£3 billion</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                  <span className="font-semibold">Fees:</span>
                  <span className="text-xl font-bold text-orange-600">£100+ million</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                  <span className="font-semibold">Interest Rate:</span>
                  <span className="text-xl font-bold text-red-600">9.75%</span>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <span className="font-semibold">Release:</span>
                  <p className="text-sm mt-1">
                    Monthly/interim basis, subject to loan requirements and new shareholder investment
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Key Implications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 border-l-4 border-green-500 bg-green-50">
                  <TrendingUp className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-green-800">Buys Critical Time</p>
                    <p className="text-sm text-green-700">Avoids immediate nationalisation, allows restructuring</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 border-l-4 border-red-500 bg-red-50">
                  <TrendingDown className="h-5 w-5 text-red-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-red-800">High Financial Cost</p>
                    <p className="text-sm text-red-700">Expensive financing adds to debt burden</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 border-l-4 border-blue-500 bg-blue-50">
                  <Target className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-blue-800">Transformation Required</p>
                    <p className="text-sm text-blue-700">
                      Necessitates comprehensive operational and financial overhaul
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ),
    },
    // Slide 4: Challenges & Opportunities
    {
      title: "Challenges & Opportunities",
      content: (
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-red-200">
            <CardHeader>
              <CardTitle className="text-red-700 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Key Challenges
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <div className="p-3 bg-red-50 rounded-lg">
                  <p className="font-semibold text-red-800">Massive Debt Burden</p>
                  <p className="text-sm text-red-600">£16bn existing debt constraining operations</p>
                </div>
                <div className="p-3 bg-red-50 rounded-lg">
                  <p className="font-semibold text-red-800">High Financing Costs</p>
                  <p className="text-sm text-red-600">9.75% interest + £100m+ fees</p>
                </div>
                <div className="p-3 bg-red-50 rounded-lg">
                  <p className="font-semibold text-red-800">Reputational Damage</p>
                  <p className="text-sm text-red-600">Loss of public trust and investor confidence</p>
                </div>
                <div className="p-3 bg-red-50 rounded-lg">
                  <p className="font-semibold text-red-800">Nationalisation Risk</p>
                  <p className="text-sm text-red-600">Ongoing threat if restructuring fails</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="text-green-700 flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Strategic Opportunities
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="font-semibold text-green-800">Complete Reset</p>
                  <p className="text-sm text-green-600">
                    Opportunity for comprehensive operational and financial transformation
                  </p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="font-semibold text-green-800">Restore Confidence</p>
                  <p className="text-sm text-green-600">
                    Rebuild public and investor trust through transparent actions
                  </p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="font-semibold text-green-800">Innovation Leadership</p>
                  <p className="text-sm text-green-600">Pioneer water management and infrastructure technologies</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="font-semibold text-green-800">Customer Relations</p>
                  <p className="text-sm text-green-600">Strengthen relationships through improved service delivery</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ),
    },
    // Slide 5: Financial Overview & Trends
    {
      title: "Financial Overview & Trends",
      content: (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Debt & Loan Cost Breakdown</CardTitle>
              <CardDescription>Financial obligations in millions (£)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`£${value}m`, "Amount"]} labelStyle={{ color: "#374151" }} />
                    <Bar dataKey="amount" fill="#3b82f6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="bg-red-50 border-red-200">
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-2xl font-bold text-red-600">£16bn</p>
                  <p className="text-sm text-red-700">Total Existing Debt</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-orange-50 border-orange-200">
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-2xl font-bold text-orange-600">£3bn</p>
                  <p className="text-sm text-orange-700">New Loan Amount</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-yellow-50 border-yellow-200">
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-2xl font-bold text-yellow-600">9.75%</p>
                  <p className="text-sm text-yellow-700">Interest Rate</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      ),
    },
    // Slide 6: Comprehensive Financial Restructuring Plan
    {
      title: "Comprehensive Financial Restructuring Plan",
      content: (
        <div className="space-y-6">
          <Card className="bg-gradient-to-r from-blue-50 to-slate-50 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-6 w-6 text-blue-600" />
                Multi-Phase Debt Reduction Strategy
              </CardTitle>
              <CardDescription>Systematic approach to achieving financial sustainability over 36 months</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded-lg border">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-bold">PHASE 1</span>
                    <span className="text-sm font-semibold">Emergency Stabilization</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p><strong>Timeline:</strong> 0-12 months</p>
                    <p><strong>Target:</strong> Secure £2bn additional equity</p>
                    <div className="space-y-1">
                      <p>• Utilize emergency facility strategically</p>
                      <p>• Negotiate with existing shareholders</p>
                      <p>• Identify new strategic investors</p>
                      <p>• Implement immediate cost reduction (£200m)</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-bold">PHASE 2</span>
                    <span className="text-sm font-semibold">Operational Transformation</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p><strong>Timeline:</strong> 12-24 months</p>
                    <p><strong>Target:</strong> Reduce debt to £15bn</p>
                    <div className="space-y-1">
                      <p>• Infrastructure efficiency programs</p>
                      <p>• Technology-driven cost optimization</p>
                      <p>• Revenue enhancement initiatives</p>
                      <p>• Asset optimization and disposal</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-bold">PHASE 3</span>
                    <span className="text-sm font-semibold">Growth & Refinancing</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p><strong>Timeline:</strong> 24-36 months</p>
                    <p><strong>Target:</strong> Achieve £12bn net debt</p>
                    <div className="space-y-1">
                      <p>• Refinance at market rates (5-6%)</p>
                      <p>• Sustainable capex program</p>
                      <p>• Innovation investment</p>
                      <p>• Market leadership restoration</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <LineChart className="h-5 w-5 text-green-600" />
                  Financial Projections (£m)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsLineChart data={financialProjectionData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="debt" stroke="#dc2626" strokeWidth={3} name="Net Debt" />
                      <Line type="monotone" dataKey="revenue" stroke="#059669" strokeWidth={2} name="Revenue" />
                    </RechartsLineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gauge className="h-5 w-5 text-blue-600" />
                  Key Performance Indicators
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Debt Reduction Progress</span>
                      <span>37% by 2028</span>
                    </div>
                    <Progress value={37} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Operational Efficiency</span>
                      <span>25% improvement</span>
                    </div>
                    <Progress value={25} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Regulatory Compliance</span>
                      <span>100% target</span>
                    </div>
                    <Progress value={100} className="h-2" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <p className="text-lg font-bold text-green-700">£7.1bn</p>
                    <p className="text-xs text-green-600">Debt Reduction Target</p>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <p className="text-lg font-bold text-blue-700">£400m</p>
                    <p className="text-xs text-blue-600">Annual Savings Target</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      ),
    },
    // Slide 7: Strategic Recommendations Part 1
    {
      title: "Strategic Recommendations: Regaining Edge (Part 1)",
      content: (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-bold">1</span>
                Operational Efficiency & Infrastructure Investment
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Leak Reduction</h4>
                  <p className="text-sm text-blue-700">
                    Prioritize aggressive leak reduction programs to minimize water loss and improve efficiency
                  </p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Infrastructure Upgrade</h4>
                  <p className="text-sm text-blue-700">
                    Invest in upgrading aging infrastructure including pipes and treatment plants
                  </p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Smart Technologies</h4>
                  <p className="text-sm text-blue-700">
                    Implement smart technologies for network monitoring and management
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-bold">2</span>
                Financial Restructuring & Governance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Debt Management</h4>
                  <p className="text-sm text-green-700">
                    Develop robust debt repayment plan and explore refinancing options
                  </p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Transparency</h4>
                  <p className="text-sm text-green-700">Enhance financial transparency and accountability measures</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Investment</h4>
                  <p className="text-sm text-green-700">
                    Secure new, stable shareholder investment aligned with sustainability goals
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ),
    },
    // Slide 7: Strategic Recommendations Part 2
    {
      title: "Strategic Recommendations: Stakeholder Focus (Part 2)",
      content: (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm font-bold">3</span>
                Customer & Public Engagement
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">PR Campaign</h4>
                  <p className="text-sm text-purple-700">
                    Launch comprehensive public relations campaign focused on transparency and commitments
                  </p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">Customer Service</h4>
                  <p className="text-sm text-purple-700">
                    Significantly improve response times and issue resolution processes
                  </p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">Community Engagement</h4>
                  <p className="text-sm text-purple-700">
                    Proactively engage with local communities and environmental groups
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm font-bold">4</span>
                Regulatory Compliance & Innovation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-orange-50 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">Compliance</h4>
                  <p className="text-sm text-orange-700">
                    Ensure strict adherence to all regulatory standards and prepare for future changes
                  </p>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">R&D Investment</h4>
                  <p className="text-sm text-orange-700">
                    Invest in sustainable water management solutions like recycling and desalination
                  </p>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">Partnerships</h4>
                  <p className="text-sm text-orange-700">
                    Explore strategic partnerships with technology firms for innovative solutions
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ),
    },
    // Slide 9: Risk Management & Mitigation Framework
    {
      title: "Risk Management & Mitigation Framework",
      content: (
        <div className="space-y-6">
          <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-red-600" />
                Enterprise Risk Assessment Matrix
              </CardTitle>
              <CardDescription>Comprehensive analysis of critical risks and mitigation strategies</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 font-semibold">Risk Category</th>
                      <th className="text-left p-3 font-semibold">Probability</th>
                      <th className="text-left p-3 font-semibold">Impact</th>
                      <th className="text-left p-3 font-semibold">Mitigation Strategy</th>
                    </tr>
                  </thead>
                  <tbody>
                    {riskMatrix.map((risk, index) => (
                      <tr key={index} className="border-b hover:bg-slate-50">
                        <td className="p-3 font-medium">{risk.risk}</td>
                        <td className="p-3">
                          <Badge variant={risk.probability === 'High' ? 'destructive' : 'secondary'} className="text-xs">
                            {risk.probability}
                          </Badge>
                        </td>
                        <td className="p-3">
                          <Badge variant={risk.impact === 'Critical' ? 'destructive' : risk.impact === 'High' ? 'destructive' : 'secondary'} className="text-xs">
                            {risk.impact}
                          </Badge>
                        </td>
                        <td className="p-3 text-xs">{risk.mitigation}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-red-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-700">
                  <AlertTriangle className="h-5 w-5" />
                  Financial Risk Controls
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="bg-red-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-red-800 text-sm mb-1">Liquidity Management</h4>
                    <p className="text-xs text-red-700">• Daily cash flow monitoring</p>
                    <p className="text-xs text-red-700">• £500m minimum cash buffer</p>
                    <p className="text-xs text-red-700">• Facility covenant compliance</p>
                  </div>
                  <div className="bg-orange-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-orange-800 text-sm mb-1">Debt Management</h4>
                    <p className="text-xs text-orange-700">• Monthly facility utilization review</p>
                    <p className="text-xs text-orange-700">• Interest rate hedging strategy</p>
                    <p className="text-xs text-orange-700">• Refinancing preparation (Q3 2025)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-700">
                  <Zap className="h-5 w-5" />
                  Operational Risk Controls
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-blue-800 text-sm mb-1">Service Continuity</h4>
                    <p className="text-xs text-blue-700">• 24/7 operations monitoring</p>
                    <p className="text-xs text-blue-700">• Emergency response protocols</p>
                    <p className="text-xs text-blue-700">• Infrastructure redundancy</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-green-800 text-sm mb-1">Regulatory Compliance</h4>
                    <p className="text-xs text-green-700">• Monthly Ofwat reporting</p>
                    <p className="text-xs text-green-700">• Environmental monitoring</p>
                    <p className="text-xs text-green-700">• Quality assurance programs</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-purple-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-purple-700">
                  <Users className="h-5 w-5" />
                  Stakeholder Risk Controls
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-purple-800 text-sm mb-1">Public Relations</h4>
                    <p className="text-xs text-purple-700">• Proactive media strategy</p>
                    <p className="text-xs text-purple-700">• Community engagement plan</p>
                    <p className="text-xs text-purple-700">• Crisis communication protocols</p>
                  </div>
                  <div className="bg-indigo-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-indigo-800 text-sm mb-1">Investor Relations</h4>
                    <p className="text-xs text-indigo-700">• Monthly investor updates</p>
                    <p className="text-xs text-indigo-700">• Transparent reporting</p>
                    <p className="text-xs text-indigo-700">• Strategic roadmap communication</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="bg-slate-50 border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                Risk Governance & Monitoring
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center p-3 bg-white rounded-lg">
                  <Clock className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <p className="font-semibold text-sm">Weekly</p>
                  <p className="text-xs text-slate-600">Risk Committee Reviews</p>
                </div>
                <div className="text-center p-3 bg-white rounded-lg">
                  <Shield className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <p className="font-semibold text-sm">Monthly</p>
                  <p className="text-xs text-slate-600">Board Risk Reports</p>
                </div>
                <div className="text-center p-3 bg-white rounded-lg">
                  <AlertTriangle className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                  <p className="font-semibold text-sm">Quarterly</p>
                  <p className="text-xs text-slate-600">Risk Assessment Updates</p>
                </div>
                <div className="text-center p-3 bg-white rounded-lg">
                  <Target className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                  <p className="font-semibold text-sm">Annual</p>
                  <p className="text-xs text-slate-600">Strategy Review & Adjustment</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ),
    },
    // Slide 10: Implementation Roadmap
    {
      title: "Detailed Implementation Roadmap & Critical Milestones",
      content: (
        <div className="space-y-6">
          <Card className="bg-gradient-to-r from-slate-50 to-blue-50 border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-6 w-6 text-blue-600" />
                36-Month Strategic Implementation Timeline
              </CardTitle>
              <CardDescription>Phased approach with clearly defined deliverables and success criteria</CardDescription>
            </CardHeader>
          </Card>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-red-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-700">
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-bold">PHASE 1</span>
                  Crisis Stabilization & Emergency Response
                </CardTitle>
                <CardDescription className="text-sm font-medium">Months 1-6 | Critical Priority</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="bg-red-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-red-800 text-sm mb-2">Financial Stabilization</h4>
                    <div className="space-y-1 text-xs">
                      <p>• Secure £2bn equity injection (Q1 2024)</p>
                      <p>• Negotiate facility covenant waivers</p>
                      <p>• Implement emergency cost reduction (£200m)</p>
                      <p>• Establish dedicated PMO office</p>
                    </div>
                  </div>
                  <div className="bg-orange-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-orange-800 text-sm mb-2">Operational Priority</h4>
                    <div className="space-y-1 text-xs">
                      <p>• Launch emergency leak repair program</p>
                      <p>• Implement 24/7 incident response</p>
                      <p>• Strengthen regulatory reporting</p>
                      <p>• Deploy crisis communication strategy</p>
                    </div>
                  </div>
                </div>
                <div className="text-center p-2 bg-white rounded border">
                  <p className="text-sm font-bold text-red-700">Target: Achieve liquidity stability</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-700">
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-bold">PHASE 2</span>
                  Operational Transformation & Efficiency
                </CardTitle>
                <CardDescription className="text-sm font-medium">Months 7-18 | Strategic Priority</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="bg-orange-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-orange-800 text-sm mb-2">Infrastructure Investment</h4>
                    <div className="space-y-1 text-xs">
                      <p>• £1.2bn capital investment program</p>
                      <p>• Smart grid implementation</p>
                      <p>• Digital transformation initiatives</p>
                      <p>• Predictive maintenance systems</p>
                    </div>
                  </div>
                  <div className="bg-yellow-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 text-sm mb-2">Performance Optimization</h4>
                    <div className="space-y-1 text-xs">
                      <p>• Process reengineering program</p>
                      <p>• Customer experience redesign</p>
                      <p>• Supplier relationship optimization</p>
                      <p>• Workforce development & training</p>
                    </div>
                  </div>
                </div>
                <div className="text-center p-2 bg-white rounded border">
                  <p className="text-sm font-bold text-orange-700">Target: Reduce debt to £15bn</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-700">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-bold">PHASE 3</span>
                  Sustainable Growth & Market Leadership
                </CardTitle>
                <CardDescription className="text-sm font-medium">Months 19-36 | Growth Priority</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-green-800 text-sm mb-2">Financial Optimization</h4>
                    <div className="space-y-1 text-xs">
                      <p>• Refinancing at market rates (5-6%)</p>
                      <p>• Achieve investment grade rating</p>
                      <p>• Optimize capital structure</p>
                      <p>• Establish sustainable dividend policy</p>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-blue-800 text-sm mb-2">Innovation & Expansion</h4>
                    <div className="space-y-1 text-xs">
                      <p>• Water technology innovation center</p>
                      <p>• Strategic partnerships development</p>
                      <p>• ESG leadership positioning</p>
                      <p>• Market expansion opportunities</p>
                    </div>
                  </div>
                </div>
                <div className="text-center p-2 bg-white rounded border">
                  <p className="text-sm font-bold text-green-700">Target: Industry-leading performance</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="bg-slate-50 border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-slate-700" />
                Key Performance Indicators & Success Metrics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-6 gap-4 text-center">
                <div className="p-3 bg-white rounded-lg border">
                  <p className="text-lg font-bold text-red-600">£12bn</p>
                  <p className="text-xs text-slate-600">Net Debt Target</p>
                  <p className="text-xs text-slate-500">by Dec 2027</p>
                </div>
                <div className="p-3 bg-white rounded-lg border">
                  <p className="text-lg font-bold text-orange-600">25%</p>
                  <p className="text-xs text-slate-600">Leak Reduction</p>
                  <p className="text-xs text-slate-500">by Dec 2024</p>
                </div>
                <div className="p-3 bg-white rounded-lg border">
                  <p className="text-lg font-bold text-green-600">BBB+</p>
                  <p className="text-xs text-slate-600">Credit Rating</p>
                  <p className="text-xs text-slate-500">by Dec 2027</p>
                </div>
                <div className="p-3 bg-white rounded-lg border">
                  <p className="text-lg font-bold text-blue-600">90%</p>
                  <p className="text-xs text-slate-600">Customer Satisfaction</p>
                  <p className="text-xs text-slate-500">by Dec 2026</p>
                </div>
                <div className="p-3 bg-white rounded-lg border">
                  <p className="text-lg font-bold text-purple-600">100%</p>
                  <p className="text-xs text-slate-600">Regulatory Compliance</p>
                  <p className="text-xs text-slate-500">Ongoing</p>
                </div>
                <div className="p-3 bg-white rounded-lg border">
                  <p className="text-lg font-bold text-indigo-600">£400m</p>
                  <p className="text-xs text-slate-600">Annual Savings</p>
                  <p className="text-xs text-slate-500">by Dec 2026</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ),
    },
    // Slide 11: Executive Summary & Board Recommendations
    {
      title: "Executive Summary & Board Recommendations",
      content: (
        <div className="space-y-6">
          <Card className="bg-gradient-to-r from-slate-900 to-blue-900 text-white border-slate-800">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Thames Water Utilities Limited: Strategic Turnaround Plan</CardTitle>
              <CardDescription className="text-center text-blue-200 text-lg mt-2">
                Board Resolution Required - Immediate Executive Action Plan
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-lg text-blue-100">
                The proposed comprehensive restructuring plan provides a viable pathway to financial stability, 
                regulatory compliance, and sustainable long-term growth for Thames Water.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="p-4 bg-white/10 rounded-lg backdrop-blur">
                  <DollarSign className="h-8 w-8 text-green-300 mx-auto mb-2" />
                  <p className="font-semibold text-green-200">Financial Recovery</p>
                  <p className="text-sm text-blue-200">£7.1bn debt reduction target</p>
                </div>
                <div className="p-4 bg-white/10 rounded-lg backdrop-blur">
                  <Shield className="h-8 w-8 text-blue-300 mx-auto mb-2" />
                  <p className="font-semibold text-blue-200">Risk Mitigation</p>
                  <p className="text-sm text-blue-200">Comprehensive control framework</p>
                </div>
                <div className="p-4 bg-white/10 rounded-lg backdrop-blur">
                  <Target className="h-8 w-8 text-purple-300 mx-auto mb-2" />
                  <p className="font-semibold text-purple-200">Strategic Execution</p>
                  <p className="text-sm text-blue-200">36-month implementation roadmap</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-red-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-700">
                  <AlertCircle className="h-5 w-5" />
                  Critical Success Factors
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="bg-red-50 p-3 rounded-lg border-l-4 border-red-500">
                    <h4 className="font-semibold text-red-800 text-sm">Board Commitment</h4>
                    <p className="text-xs text-red-700">Unanimous support for restructuring plan and resource allocation</p>
                  </div>
                  <div className="bg-orange-50 p-3 rounded-lg border-l-4 border-orange-500">
                    <h4 className="font-semibold text-orange-800 text-sm">Stakeholder Alignment</h4>
                    <p className="text-xs text-orange-700">Coordinated engagement with regulators, lenders, and shareholders</p>
                  </div>
                  <div className="bg-yellow-50 p-3 rounded-lg border-l-4 border-yellow-500">
                    <h4 className="font-semibold text-yellow-800 text-sm">Execution Excellence</h4>
                    <p className="text-xs text-yellow-700">Disciplined program management and milestone delivery</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-700">
                  <CheckCircle className="h-5 w-5" />
                  Investment Committee Decisions Required
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
                    <h4 className="font-semibold text-green-800 text-sm">Capital Allocation</h4>
                    <p className="text-xs text-green-700">Approve £2bn emergency equity injection and £1.2bn capex program</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 text-sm">Governance Structure</h4>
                    <p className="text-xs text-blue-700">Establish Turnaround Committee with weekly reporting cadence</p>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg border-l-4 border-purple-500">
                    <h4 className="font-semibold text-purple-800 text-sm">External Advisory</h4>
                    <p className="text-xs text-purple-700">Retain specialized restructuring and operational consultants</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="bg-slate-50 border-slate-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-slate-700" />
                Immediate Actions Required (Next 30 Days)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="p-3 bg-white rounded-lg border text-center">
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-bold block mb-2">WEEK 1</span>
                  <p className="text-sm font-medium">Board Resolution</p>
                  <p className="text-xs text-slate-600">Approve strategic plan & budget</p>
                </div>
                <div className="p-3 bg-white rounded-lg border text-center">
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-bold block mb-2">WEEK 2</span>
                  <p className="text-sm font-medium">PMO Establishment</p>
                  <p className="text-xs text-slate-600">Appoint program leadership</p>
                </div>
                <div className="p-3 bg-white rounded-lg border text-center">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-bold block mb-2">WEEK 3</span>
                  <p className="text-sm font-medium">Stakeholder Engagement</p>
                  <p className="text-xs text-slate-600">Regulator & lender meetings</p>
                </div>
                <div className="p-3 bg-white rounded-lg border text-center">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-bold block mb-2">WEEK 4</span>
                  <p className="text-sm font-medium">Implementation Launch</p>
                  <p className="text-xs text-slate-600">Begin Phase 1 initiatives</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="text-center pt-6 bg-gradient-to-r from-blue-50 to-slate-50 p-6 rounded-lg border">
            <h3 className="text-2xl font-bold text-slate-800 mb-3">Recommendation for Board Approval</h3>
            <p className="text-lg text-slate-700 mb-4">
              The Consulting Team recommends <strong>immediate approval</strong> of the comprehensive turnaround strategy
            </p>
            <div className="bg-white p-4 rounded-lg border inline-block">
              <p className="text-sm font-semibold text-slate-800">Next: Executive Session & Formal Resolution</p>
              <p className="text-xs text-slate-600">Confidential discussion of implementation details</p>
            </div>
          </div>
        </div>
      ),
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white font-['Inter']">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-semibold text-gray-800">Thames Water Executive Presentation</h2>
            <Badge variant="outline" className="text-sm">
              Slide {currentSlide + 1} of {slides.length}
            </Badge>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="flex items-center gap-2"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="flex items-center gap-2"
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Slide Content */}
        <div className="bg-white rounded-lg shadow-lg min-h-[600px] p-8">
          {currentSlide > 0 && (
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{slides[currentSlide].title}</h1>
              <div className="w-20 h-1 bg-blue-600 rounded"></div>
            </div>
          )}
          <div className="h-full">{slides[currentSlide].content}</div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-6 gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-blue-600" : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div className="text-center mt-4 text-sm text-gray-500">{slides[currentSlide].title}</div>
      </div>
    </div>
  )
}
