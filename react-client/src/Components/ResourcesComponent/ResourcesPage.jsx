import React, { Component } from 'react';
import './ResourcesPage.css';

class ResourcesPage extends Component {
  render() {
    return (
      <section>
        <section id="campus-resources">

          <div>
            <p style={{ fontSize:34 }}>Campus Resources</p>
          </div>

          <div id="container-resources">

            <div id="open-source-resources">
              {/*Different way of declaring inline style with React*/}
              <p style={{ fontSize:28 }}>Open Source Resources</p>
              <p><u>Workspace</u></p>
              <p>Mon & Wed from 6-8pm</p>
              <p>Tue & Thu from 8-10pm</p>
              <p><i>Brown Lab (Library Main Floor)</i></p>
            </div>
            <div id="academic-support">
              <p style={{ fontSize:28 }}>Academic Support</p>
              <p><u>SSAP</u></p>
              <p>Wed & Fri from 10-12pm</p>
              <p><i>LIB 251 (Library)<br></br></i></p>
              <p><u>Peer Learning</u></p>
              <p>Mon-Thu from 8-10pm</p>
              <p><i>Library Ground Floor</i></p>
            </div>

          </div>

        </section>
        {/* TODO: Content for this section */}
        { // Comments have to be like this, thanks React
        //<section id="summer-opportunities">

        //  <div>
          //  <p style={{ fontSize:34 }}>Summer Opportunities</p>
        //  </div>

        //  <div id="container-resources">

          //  <div id="urc">

          //  </div>

        //  </div>

        //</section>
        }

      </section>

    )
  }
}

export default ResourcesPage;
