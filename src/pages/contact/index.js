import * as React from "react";
import { graphql } from 'gatsby'
import { navigate } from "gatsby-link";
import Layout from "../../components/layout";
import Seo from "../../components/seo"
import GlobalHero from "../../components/globalHero"
import GoogleMap from "../../components/googleMap"
import * as Styles from "../../styles/contact.css"
import styled from "styled-components"

const LinkButton = styled.button`
  background: #bca360;
  transition: 0.3s;
  cursor: pointer;
    &:hover {
      background: #A78D49;
    }
`

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error));
  };

  render() {
    return (
      <Layout>
        <Seo title="Contact" />
        <GlobalHero
          title= "Contact"
          summary= "To schedule a meeting with an attorney, please call at 813-251-0777 or complete the form below."
        />
        <GoogleMap />
        <div style={{
          background:`#1d3851`,
          padding:`3rem 1rem 5rem`
        }}>

        <div className="container">
          <div style={{width:`100%`}}>

            <div>
              <form
                name="contact"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{" "}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <div className="field">

                  <label className="label" htmlFor={"name"}>
                    Your Name
                  </label>

                  <div className="control">
                    <input
                      placeholder="First and Last name"
                      type={"text"}
                      name={"name"}
                      onChange={this.handleChange}
                      id={"name"}
                      required={true}
                    />
                  </div>
                </div>

                <div className="field">

                  <label className="label" htmlFor={"email"}>
                    E-mail
                  </label>

                  <div className="control">
                    <input
                      placeholder="hello@domain.com"
                      type={"email"}
                      name={"email"}
                      onChange={this.handleChange}
                      id={"email"}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <div style={{marginBottom:`1.2em`}}>
                    <label htmlFor={"message"}>
                      Message
                    </label>
                  </div>
                  <div className="control">
                    <textarea
                      placeholder="Brief description of your legal issue"
                      name={"message"}
                      onChange={this.handleChange}
                      id={"message"}
                      required={true}
                    />
                  </div>
                </div>

                <div className="field">
                  <LinkButton type="submit">
                    Submit
                  </LinkButton>
                </div>
              </form>
            </div>
            <small style={{ letterSpacing:`1px`}} >
              * The use of this form for communication with the firm or any individual member of the firm does not establish an attorney-client relationship. Confidential or time-sensitive information should not be sent through this form.
            </small>
          </div>
        </div>

        </div>
      </Layout>
    );
  }
}
