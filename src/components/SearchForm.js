import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const SearchForm = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleInputChange = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
  };

  const handleSearch = (event) => {
    event.preventDefault();

    if (searchTerm.trim() !== '') {
      setErrorMsg('');
      props.handleSearch(searchTerm);
    } else {
      setErrorMsg('Please enter a search term.');
    }
  };

  return (
    <div>
      <Form  className="form" onSubmit={handleSearch}>
        {errorMsg && <p className="errorMsg">{errorMsg}</p>}
        <Form.Group controlId="formBasicEmail">
          {/* <Form.Label>Enter search term</Form.Label> */}
          <Form.Control
          className="form_control"
            type="search"
            name="searchTerm"
            value={searchTerm}
            placeholder="Search for album, artist or playlist"
            onChange={handleInputChange}
            autoComplete="off"
          />
        </Form.Group>
        <Button className="searchbtn" variant="info" type="submit">
          Search
        </Button>
      </Form>
    </div>
  );
};

export default SearchForm;
