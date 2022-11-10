import React from 'react';
import styled from 'styled-components';
export default function Footer() {
  return (
    <Nav>
      <div className='main-footer'>
        <div className='container'>
          <div className='row'>
            {/* Column1 */}
            <div className='col'>
              <h4>Contact | Address</h4>
              <h1 className='list-unstyled'>
                <li>922-333-6969</li>
                <li>Addis Ababa, Ethiopia</li>
                <li>123 Streeet Haya Hulet</li>
              </h1>
            </div>
            {/* Column2 */}
            <div className='col'>
              <h4>Developers</h4>
              <ui className='list-unstyled'>
                <li>Amanuel F.</li>
                <li>Birikti W.</li>
                <li>Tigist A.</li>
                <li>Yonathan B..</li>
              </ui>
            </div>
            {/* Column3 */}
            <div className='col'>
              <h4>Sponsors</h4>
              <ui className='list-unstyled'>
                <li>Dot Ethiopia</li>
                <li>Orange Digital Center</li>
              </ui>
            </div>
          </div>
          <br />
          <div className='row'>
            <p className='col-sm'>
              &copy;{new Date().getFullYear()} DOT | ODC | All rights reserved
              | Terms Of Service | Privacy
            </p>
          </div>
        </div>
      </div>
      {/* </span> */}
    </Nav>
  );
}
const Nav = styled.nav`
  margin-top: 30px;
  border-radius: 10px;
  .main-footer {
    color: orange;
    background-color: white;
    padding: 1em;
    position: relative;
    width: 100%;
  }
  .list-unstyled{
    list-style-type: none;
  }
  .row {
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
  }
  .col-sm {
    margin: auto;
  }
`;
