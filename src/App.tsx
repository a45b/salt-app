import { ListBox, StackLayout, Option, Text, Spinner, FlexLayout, NavigationItem } from '@salt-ds/core';
import './App.scss'

function App() {
  return (
    <>
      <div className='app-container'>
        <nav>
          <FlexLayout justify='space-between' gap={3}>
            <h1 className='logo'>Meeting Assist</h1>
            <NavigationItem>

            </NavigationItem>
          </FlexLayout>
        </nav>
        <div className='side-bar'>
          <ListBox className='meeting-list' style={{ width: "300px" }} onSelectionChange={(e, v) => {
            console.log(e, v)
          }}>
            <Option value={'Red1'} key={'1'}>
              <StackLayout gap={0.5} align="start">
                <Text>
                  <strong>Kamal Dev</strong>
                </Text>
                <Text styleAs="label" color="secondary">
                  {'Jun 27, 2024'}
                </Text>
              </StackLayout>
            </Option>
            <Option disabled value={'Blue'} key={'2'}>
              <StackLayout gap={0.5} align="start">
                <Text>
                  <strong>{'Blue'}</strong>
                </Text>
                <Text styleAs="label" color="secondary">
                  {'#cc0000'}
                </Text>
              </StackLayout>
            </Option>
            <Option value={'Green'} key={'3'}>
              <StackLayout gap={0.5} align="start">
                <Text>
                  <strong>{'Green'}</strong>
                </Text>
                <Text styleAs="label" color="secondary">
                  {'#cc0000'}
                </Text>
              </StackLayout>
            </Option>
          </ListBox>
        </div>

        <main className='main-content'>
          <StackLayout gap={2} align="center">
            <Spinner />
            <Text aria-atomic="true" aria-live="polite">
              Loading...
            </Text>
          </StackLayout>
        </main>
      </div>
    </>
  )
}

export default App
