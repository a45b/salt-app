import { ListBox, StackLayout, Option, Text } from '@salt-ds/core';
import './App.css'

function App() {
  return (
    <>
      <div className='app-container'>
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
            
          </main>
      </div>
    </>
  )
}

export default App
