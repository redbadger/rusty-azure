import React from 'react';
import styled from 'styled-components';

import Header from '../components/header';
import Navigation from '../components/navigation';

const Styles = styled.div`
  main {
    margin: 0 auto;
    max-width: 800px;
  }

  h1 {
    text-align: center;
  }

  dt,
  dd {
    display: inline-block;
  }

  dt {
    font-weight: 600;
  }

  dd {
    margin-left: 0.5rem;
    p {
      margin-top: 0;
    }
  }
`;

const HomePage: React.FC = () => (
  <Styles>
    <Header />
    <main>
      <h1>Extending Azure SDK for Rust</h1>
      <p>
        How we extended the unofficial Azure SDK for Rust that is now being
        backed by Microsoft
      </p>
      <dl>
        <div>
          <dt>Date:</dt>
          <dd>
            <p>
              <time dateTime="2021-04-27T18:00:00.000Z">
                Tuesday, 27th April 2021 at 7:00 PM BST
              </time>
            </p>
          </dd>
        </div>
        <div>
          <dt>Location:</dt>
          <dd>
            <p>
              <a
                href="https://skillsmatter.com/meetups/13348-ldn-virtual-talks-apr-2021-red-badger-takeover"
                target="_blank"
                rel="noreferrer"
                className="external-link"
              >
                Online meetup at Skills Matter
              </a>
            </p>
          </dd>
        </div>
      </dl>

      <Navigation />
    </main>
  </Styles>
);

export default HomePage;
