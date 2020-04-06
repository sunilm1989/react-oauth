import React, { Component } from "react";

class Profiles extends Component {
  state = {
    profile: null,
    error: ""
  };

  componentDidMount() {
    this.loadUserProfile();
  }

  loadUserProfile() {
    this.props.auth.getProfile((profile, error) => {
      this.setState({ profile, error });
    });
  }

  render() {
    const { profile } = this.state;
    if (!profile) return null;
    return (
      <>
        <h1>Profiles</h1>
        <p>{profile.name}</p>
        <img
          style={{ maxWidth: 100, maxHeight: 100 }}
          src={profile.picture}
          alt="profile pic"
        ></img>
        <pre>{JSON.stringify(profile, null, 2)}</pre>
      </>
    );
  }
}

export default Profiles;
