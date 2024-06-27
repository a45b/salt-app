import { ListBox, StackLayout, Option, Text, Spinner, FlexLayout, StatusIndicator, Button, Drawer, DrawerCloseButton, H2, FileDropZone, FileDropZoneIcon, FileDropZoneTrigger } from '@salt-ds/core';
import './App.scss'
import { AddDocumentIcon, AddIcon } from '@salt-ds/icons';
import { SyntheticEvent, useId, useState } from 'react';

function App() {
  const [open, setOpen] = useState(false);
  const id = useId();

  const handleRequestOpen = () => {
    setOpen(true);
  };

  const onOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const validate = (event: SyntheticEvent, files: File[]) => {
    console.log("validate files", files);
  };
  
  return (
    <>
      <div className='app-container'>
        <nav>
          <FlexLayout justify='space-between' gap={3} align='center'>
            <h1 className='logo'>Meeting Assist</h1>

            <div>
              <Button variant="primary" onClick={handleRequestOpen}>
                <AddIcon/> Upload
              </Button>
            </div>
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
                  {'#cc0000'} <small><StatusIndicator status="warning" /> </small>
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

      <Drawer
        open={open}
        onOpenChange={onOpenChange}
        position="right"
        style={{ height: '100vh' }}
        aria-labelledby={id}
      >
        <DrawerCloseButton onClick={handleClose} />
        <H2 id={id} style={{ paddingBottom: "var(--salt-spacing-300)" }}>
          Marginal Tiering
        </H2>
        <div style={{ height: "calc(3 * var(--salt-size-base))" }}
        >
          <FileDropZone
            style={{ width: 300 }}
            onDrop={(event, files) => validate(event, files)}
          >
            <FileDropZoneIcon />
            <strong>Drop files here or</strong>
            <FileDropZoneTrigger accept=".png" onChange={validate} />
            <Text>Only .txt, .mp3 and .mp4 files</Text>
          </FileDropZone>
        </div>
      </Drawer>
    </>
  )
}

export default App
