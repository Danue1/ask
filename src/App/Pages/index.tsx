import React, { FC, Suspense, lazy } from 'react'
import { Switch, Route, Redirect } from 'react-router'
import styled from 'styled-components'

const Layout = styled.div`
  max-width: 64rem;
  width: 100%;

  margin: 0 auto;
`

export const Pages: FC = () => (
  <Layout>
    <Suspense fallback={null}>
      <Switch>
        <Route path="/" component={lazy(() => import('./Home'))} exact={true} />
        <Route path="/:mentionId" component={lazy(() => import('./Ask'))} exact={true} />
        <Redirect to="/" />
      </Switch>
    </Suspense>
  </Layout>
)
