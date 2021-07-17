import { React, Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container";
import API from "../utils/API";

// AFTER LOGIN, ADD THE USER'S ID AT THE END OF URL THAT CALLS THIS DOC
class ProfileForm extends Component {
  state = {
    user: "test",
    intent: "Friends",
    first: "",
    last: "",
    age: "",
    gender: "Male",
    sex: "Heterosexual",
    city: "",
    state: "",
    pictures: [],
    bio: "",
    id: this.props.match.params.id, //this woulD BE THE USER
    selectedFile: null
  }



  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;
    if (name === "picture") {
      this.setState({ selectedFile: window.URL.createObjectURL(event.target.files[0]) })
      // this.setState({pictures: this.state.pictures.concat(this.state.selectedFile)});
    } 
    else {
    this.setState({ [name]: value })
    }

  };


  handleFormSubmit = event => {
    event.preventDefault();

    if (this.state.age < 18) {
      alert("Pinder is not for minors!")
    }

    if(!this.state.pictures) {
      this.setState({pictures: ["data:image/png;base64,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"]})
    }
    this.setState({pictures: this.state.pictures.push(this.state.selectedFile.substring(5))});

    API.createProfile({
      // user: this.state.user,
      intent: this.state.intent,
      first: this.state.first,
      last: this.state.last,
      age: this.state.age,
      gender: this.state.gender,
      sex: this.state.sex,
      city: this.state.city,
      state: this.state.state,
      pictures: this.state.pictures,
      bio: this.state.bio,
    })
      .then(res => {
        console.log(res.data._id)
        window.location = `/profile/${res.data._id}`;
      })
      .catch(err => {
        // NEED VALIDATORS TO SHOW
        alert(err); // CAN DIRECT TO LOGIN PAGE USING LINK
        console.log(err);
      });
  };


  fileChangedHandler = (event) => {
    this.setState({ selectedFile: window.URL.createObjectURL(event.target.files[0]) })
  }
  
  uploadHandler = (event) => {
    event.preventDefault();
    console.log(this.state.selectedFile);
    this.setState({pictures: this.state.pictures.concat(this.state.selectedFile)});
    console.log(this.state.pictures)
  }

  render() {
    return (
      <div className="form">
        <h3>Your Profile</h3>
        <form>

          <label>First Name</label>
          <input
            value={this.state.first}
            type="text"
            name="first"
            onChange={this.handleInputChange}
          />

          <label>Last Name</label>
          <input
            value={this.state.last}
            type="text"
            name="last"
            onChange={this.handleInputChange}
          />

          <label>Age</label>
          <input
            value={this.state.age}
            type="text"
            name="age"
            onChange={this.handleInputChange}
          />

          {/* Hope to add more options later to account for all genders, but keeping it simple for now */}
          <label>Gender</label>
          <select id="gender" onChange={this.handleInputChange} name="gender">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          <label>Sexuality</label>
          <select id="sex" onChange={this.handleInputChange} name="sex">
            <option value="Heterosexual">Heterosecual</option>
            <option value="Bisexual">Bisexual</option>
            <option value="Same">Same Gender Loving</option>
          </select>


          <div>
            <label>City</label>
            <input
              value={this.state.city}
              type="text"
              name="city"
              placeholder="Birmingham"
              onChange={this.handleInputChange}
            />
            <label>State</label>
            <select id="state" onChange={this.handleInputChange} name="state">
              <option value="AL">AL</option>
              <option value="AK">AK</option>
              <option value="AZ">AZ</option>
              <option value="AR">AR</option>
              <option value="CA">CA</option>
              <option value="CO">CO</option>
              <option value="CT">CT</option>
              <option value="DE">DE</option>
              <option value="FL">FL</option>
              <option value="GA">GA</option>
              <option value="HI">HI</option>
              <option value="ID">ID</option>
              <option value="IL">IL</option>
              <option value="IN">IN</option>
              <option value="IA">IA</option>
              <option value="KS">KS</option>
              <option value="KY">KY</option>
              <option value="LA">LA</option>
              <option value="ME">ME</option>
              <option value="MD">MD</option>
              <option value="MA">MA</option>
              <option value="MN">MN</option>
              <option value="MS">MS</option>
              <option value="MO">MO</option>
              <option value="MT">MT</option>
              <option value="NE">NE</option>
              <option value="NV">NV</option>
              <option value="NH">NH</option>
              <option value="NJ">NJ</option>
              <option value="NM">NM</option>
              <option value="NY">NY</option>
              <option value="NC">NC</option>
              <option value="ND">ND</option>
              <option value="OH">OH</option>
              <option value="OK">OK</option>
              <option value="OR">OR</option>
              <option value="PA">PA</option>
              <option value="RI">RI</option>
              <option value="SC">SC</option>
              <option value="SD">SD</option>
              <option value="TN">TN</option>
              <option value="TX">TX</option>
              <option value="UT">UT</option>
              <option value="VT">VT</option>
              <option value="VA">VA</option>
              <option value="WA">WA</option>
              <option value="WV">WV</option>
              <option value="WI">WI</option>
              <option value="WY">WY</option>
            </select>
          </div>




          {/* image upload */}
          <input type="file" name="picture" onChange={this.handleInputChange} />






            <label>Bio</label>
            <input
              value={this.state.bio}
              type="textfield"
              name="bio"
              onChange={this.handleInputChange}
            />

            <label>What is your reason for using Pinder?</label>
            <select id="intent" onChange={this.handleInputChange} name="intent">
              <option value="Friends">Friends</option>
              <option value="HookUps">Hook Ups</option>
              <option value="Love">Looking for Love</option>
              <option value="Anything">I'm looking for anything and everything!</option>
            </select>

            <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>

        );
  }
}


        export default ProfileForm;
