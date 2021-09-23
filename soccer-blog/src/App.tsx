import React from 'react';
import './App.css';
import { PostViewer } from './components/PostViewer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Row } from 'react-bootstrap';
import { WebsiteNavbar } from './components/WebsiteNavbar';

function App() : JSX.Element{
  return (
    <Container className="App" fluid>
      <WebsiteNavbar></WebsiteNavbar>
      <Row>
        <PostViewer></PostViewer>
      </Row>
    </Container>
  );
}

export default App;
