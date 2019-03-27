import React, { FC, Suspense, lazy } from 'react'
import { Switch, Route, Redirect } from 'react-router'

export const Pages: FC = () => (
  <Suspense fallback={null}>
    <Switch>
      <Route path="/" component={lazy(() => import('./Home'))} exact={true} />
      <Route path="/:mentionId" component={lazy(() => import('./Ask'))} exact={true} />
      <Redirect to="/" />
    </Switch>
  </Suspense>
)
