import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Briefcase, MapPin, Search, Star, TrendingUp, User, Bell, MessageSquare, Filter } from "lucide-react"
import { Suspense } from "react"

export const metadata = {
  title: "Kaamify",
  description: "Kaamify – your trusted platform for work and services",
}

export default function HomePage() {
  return (
    <Suspense fallback={null}>
      <div className="min-h-screen font-sans">
        {/* Navbar */}
        <nav className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary font-bold text-primary-foreground">
                H
              </div>
              <span className="text-xl font-bold tracking-tight">HireFlow</span>
            </div>

            <div className="hidden items-center gap-8 md:flex">
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
                Marketplace
              </a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
                My Jobs
              </a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
                Payments
              </a>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-primary" />
              </Button>
              <div className="h-8 w-8 rounded-full bg-accent flex items-center justify-center border border-primary/20 cursor-pointer">
                <User className="h-4 w-4 text-primary" />
              </div>
            </div>
          </div>
        </nav>

        <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <Tabs defaultValue="worker" className="space-y-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
                  Good morning, <span className="text-primary italic">Ankur Bhadauriya</span>
                </h1>
                <p className="text-muted-foreground text-pretty max-w-lg">
                  Your portal to opportunities. Manage your profile, find high-quality gigs, or hire expert talent.
                </p>
              </div>
              <TabsList className="h-12 p-1 bg-secondary border">
                <TabsTrigger value="worker" className="px-6 data-[state=active]:bg-background">
                  Find Work
                </TabsTrigger>
                <TabsTrigger value="hiring" className="px-6 data-[state=active]:bg-background">
                  Hire Talent
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="worker" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {/* Search Section */}
              <div className="relative group">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/20 to-transparent blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative flex flex-col gap-3 rounded-xl bg-card border p-4 shadow-xl md:flex-row">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      placeholder="Search jobs, skills, or titles..."
                      className="pl-10 h-12 bg-background/50 border-none ring-1 ring-border focus-visible:ring-primary"
                    />
                  </div>
                  <div className="relative w-full md:w-64">
                    <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      placeholder="Location"
                      className="pl-10 h-12 bg-background/50 border-none ring-1 ring-border focus-visible:ring-primary"
                    />
                  </div>
                  <Button className="h-12 px-8 font-semibold shadow-lg shadow-primary/20">Find Opportunities</Button>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {[
                  { label: "Active Applications", value: "12", icon: Briefcase, trend: "+2" },
                  { label: "Completion Rate", value: "98%", icon: Star, trend: "0%" },
                  { label: "Earnings (Month)", value: "$4.2k", icon: TrendingUp, trend: "+15%" },
                  { label: "Unread Messages", value: "3", icon: MessageSquare, trend: "New" },
                ].map((stat, i) => (
                  <Card
                    key={i}
                    className="border-none bg-secondary/50 overflow-hidden relative group cursor-pointer hover:bg-secondary transition-colors"
                  >
                    <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                      <stat.icon className="h-12 w-12 text-primary" />
                    </div>
                    <CardContent className="p-4 pt-6">
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                      <div className="mt-1 flex items-baseline gap-2">
                        <p className="text-2xl font-bold">{stat.value}</p>
                        <span className="text-[10px] font-bold text-primary bg-primary/10 px-1.5 py-0.5 rounded uppercase">
                          {stat.trend}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Job Feed */}
              <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-border/50">
                    <h2 className="text-lg font-semibold flex items-center gap-2">
                      Recent Opportunities <span className="h-2 w-2 rounded-full bg-primary" />
                    </h2>
                    <Button variant="ghost" size="sm" className="text-muted-foreground">
                      <Filter className="mr-2 h-4 w-4" /> Filter
                    </Button>
                  </div>

                  {[1, 2, 3].map((job) => (
                    <Card
                      key={job}
                      className="group hover:border-primary/40 transition-all duration-300 bg-card/40 backdrop-blur-sm"
                    >
                      <CardHeader className="flex flex-row items-start justify-between space-y-0">
                        <div className="space-y-1">
                          <CardTitle className="text-xl group-hover:text-primary transition-colors cursor-pointer">
                            Senior UI/UX Designer
                          </CardTitle>
                          <CardDescription className="flex items-center gap-3">
                            <span className="flex items-center gap-1">
                              <Briefcase className="h-3 w-3" /> Digital Agency
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" /> Remote
                            </span>
                          </CardDescription>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-primary">$85 - $120 / hr</p>
                          <p className="text-xs text-muted-foreground">Posted 2h ago</p>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          Looking for a creative visionary to lead the redesign of our fintech platform. Must have
                          experience with Figma, complex design systems, and user research protocols...
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {["Figma", "React", "Design Systems", "Prototyping"].map((skill) => (
                            <Badge
                              key={skill}
                              variant="secondary"
                              className="bg-primary/5 text-primary-foreground/80 hover:bg-primary/10 border-none px-2 py-0.5 text-[10px] font-semibold tracking-wide uppercase"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Sidebar Info */}
                <div className="space-y-6">
                  <Card className="bg-primary/5 border-primary/20">
                    <CardHeader>
                      <CardTitle className="text-base">Complete Your Profile</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="h-2 w-full rounded-full bg-secondary overflow-hidden">
                        <div className="h-full w-4/5 bg-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        80% complete. Add a video intro to get 3x more views.
                      </p>
                      <Button
                        variant="outline"
                        className="w-full border-primary/30 hover:bg-primary/10 hover:text-primary bg-transparent"
                      >
                        Complete Profile
                      </Button>
                    </CardContent>
                  </Card>

                  <div className="space-y-4">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                      Recommended for you
                    </h3>
                    {[
                      { title: "React Native Lead", company: "MobileFirst", pay: "$140k" },
                      { title: "DevOps Architect", company: "CloudScale", pay: "$165k" },
                    ].map((rec, i) => (
                      <div
                        key={i}
                        className="group p-3 rounded-lg border border-transparent hover:border-border hover:bg-accent/50 transition-all cursor-pointer"
                      >
                        <p className="font-medium group-hover:text-primary">{rec.title}</p>
                        <p className="text-xs text-muted-foreground">
                          {rec.company} • {rec.pay}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="hiring" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {/* Hiring Content Scaffold */}
              <div className="flex items-center justify-center h-64 border-2 border-dashed rounded-xl bg-secondary/20">
                <div className="text-center space-y-2">
                  <h3 className="text-lg font-semibold">Post a Job</h3>
                  <p className="text-muted-foreground max-w-xs mx-auto">
                    Start looking for top-tier talent across our global network of experts.
                  </p>
                  <Button className="mt-4">Create New Listing</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </Suspense>
  )
}
