import * as React from "react";
import { navigate } from "gatsby-link";
import Layout from "../../components/layout";
import Seo from "../../components/seo"
import GlobalHero from "../../components/globalHero"

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
          summary= "Etiam hendrerit ipsum fermentum."
        />
        <div
        style={{padding:`6rem 1rem 6rem`}}
        >

        <div className="container">
          <div className="top-0 absolute w-full md:w-2/3">

            <div className="mt-64 w-5/6 md:w-1/3">
              <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 "
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
                <div className="field mb-4">
                  <label className="label block text-gray-700 text-sm font-bold mb-2" htmlFor={"name"}>
                    Your Name
                  </label>
                  <div className="control">
                    <input
                      className="input bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      placeholder="Your Name"
                      type={"text"}
                      name={"name"}
                      onChange={this.handleChange}
                      id={"name"}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field mb-6">
                  <label className="label block text-gray-700 text-sm font-bold mb-2" htmlFor={"email"}>
                    Email
                  </label>
                  <div className="control">
                    <input
                      className="input bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      placeholder="Email"
                      type={"email"}
                      name={"email"}
                      onChange={this.handleChange}
                      id={"email"}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field mb-4">
                  <label className="label block text-gray-700 text-sm font-bold mb-2" htmlFor={"message"}>
                    Message
                  </label>
                  <div className="control">
                    <textarea
                      className="textarea bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      placeholder="Message"
                      name={"message"}
                      onChange={this.handleChange}
                      id={"message"}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <button className="button is-link bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Send
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>

        </div>
      </Layout>
    );
  }
}
