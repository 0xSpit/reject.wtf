import { Dashboard, Landing, NotFound } from 'pages'
import { Route, Switch } from 'wouter'

export function RootNavigator() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-900">
      <div className="container mx-auto flex flex-col justify-center gap-12 px-16 py-12">
        <Switch>
          <Route path="/" component={Landing} />
          <Route path="/dashboard" component={Dashboard} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </main>
  )
}
