import React, { Component } from 'react';
import {
  Container, FormGroup, Label, FormText, Button
} from 'reactstrap';
import axios from 'axios';

class UploadPics extends Component {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
  }

  submitFile = (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append('foo', 'bar');
    data.append('avatar', this.fileInput.current.files[0]);

    const config = {
      headers: { Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjMTlmYWU1Mzk3NjYwODg0ODhmZTFkOCIsImVtYWlsIjoieW91cGl0YXRhb3VpbmVAeW9wbWFpbC5jb20iLCJpYXQiOjE1NDUyMDgzNTN9.6pRCWwrnGZKC60XrpUGSdWPGlKEtVKHyoDOR1ZQN6k4' },

      // onUploadProgress: (progressEvent) => {
      //   const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
      // },
    };

    axios.post('/api/uploadfile', data, config)
      .then(result => console.log(result));
  }

  render() {
    const token = localStorage.getItem('token');
    return (
      <Container style={{ margin: '5vh 5vw' }}>
        Hello {token}<br />
        <form onSubmit={this.submitFile}>
          <FormGroup>
            <Label for="exampleFile">File</Label>
            <input type="file" name="file" id="exampleFile" ref={this.fileInput} />
            <FormText color="muted">
              This is some placeholder block-level help text for the above input.
              It's a bit lighter and easily wraps to a new line.
            </FormText>
            <Button type="submit">Soumettre</Button>
          </FormGroup>
        </form>
        {/* <SignOut /> */}
      </Container>
    );
  }
}

export default UploadPics;
