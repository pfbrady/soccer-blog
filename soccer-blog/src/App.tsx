import React, { useState } from 'react';
import './App.css';
import { PostViewer } from './components/PostViewer';
import { Post } from './interfaces/post';
import SAMPLEPOSTS from './assets/sampleBlogPosts.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Row, Col } from 'react-bootstrap';
import { WebsiteNavbar } from './components/WebsiteNavbar';

function App() : JSX.Element{
  const [activePost, setActivePost] = useState<Post>(SAMPLEPOSTS[0] as Post);

  return (
    <Container className="App" fluid="sm">
      <WebsiteNavbar></WebsiteNavbar>
      <Row>
        <Col>1 of 3</Col>
        <Col>
          <PostViewer></PostViewer>
        </Col>
        <Col>2 of 3</Col>
      </Row>
    </Container>
  );
}

export default App;
