
import React, { useState , useEffect} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Input, Form, FormGroup, Label } from 'reactstrap';
import axios from 'axios';
import Home from './HomePage';
import { useNavigate } from 'react-router-dom';

function LoginValidation( props) {

    // const [data , setData] = useState();
     const navigate = useNavigate();
    const [modal, setModal] = useState(false);


    const [formdata, setFormdata] = useState({
      email: '',
      password: ''
    })


    let isValidData = async () => {
      try {
          let response = await axios.get(`http://localhost:4000/login/${formdata.email}/${formdata.password}`);
            // setData(response);
          if(response.data === "valid"){
            navigate('/home');
          } else {
            alert('login failed...!');
          }
      } catch (error) {
          console.log(error)
      }
  }

    useEffect(() => {
      isValidData()
    }, [])



  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormdata({
      ...formdata,
      [name]: value,
    });
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault()

    toggle()
    await isValidData()
    setFormdata({
      email: '',
      password: ''
    });
  }


  const toggle = () => setModal(!modal);


  return (
    <div>
      {/* <Button onClick={toggle}>
        Login
      </Button> */}
      <button
  onClick={toggle}
  className="btn btn-link text-decoration-none small-button"
  style={{ color: 'inherit' }}
>
  Login
</button>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Login Page</ModalHeader>
        <ModalBody>

          <Form onSubmit={handleSubmit}>

            <FormGroup>
              <Label
                for="exampleEmail"
                hidden
              >
                Email
              </Label>
              <Input
                id="email"
                name="email"
                placeholder="email"
                type="email"
                value={formdata.email}
                onChange={handleInput}
                required
              />
            </FormGroup>
            {' '}
            <FormGroup>
              <Label
                for="examplePassword"
                hidden
              >
                Password
              </Label>
              <Input
                id="password"
                name="password"
                placeholder="Password"
                type="password"
                value={formdata.password}
                onChange={handleInput}
                required
              />
            </FormGroup>
            {' '}
            {/* onClick={(e) => { handleSubmit(e) }} */}
            <Button color="primary" type="submit">
              Submit
            </Button>
          </Form>

        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>

    </div>
  );
}

export default LoginValidation;