import React from 'react';
import styled from 'styled-components';

import Header from '../components/header';
import Navigation from '../components/navigation';

const Styles = styled.div`
  main {
    margin: 0 auto;
    max-width: 800px;
    text-align: center;
  }

  p {
    max-width: 120ch;
    text-align: start;
  }

  a {
    color: black;
  }
`;

const AboutPage: React.FC = () => (
  <Styles>
    <Header />
    <main>
      <h1>About</h1>

      <p>
        In 2020, Red Badger engaged with the UK Medicines and Healthcare
        products Regulatory Agency (MHRA) to build from scratch the medicines
        and product portal https://products.mhra.gov.uk/.
      </p>
      <p>
        The project must use Azure as a cloud provider because it is the
        official UK Government provider for cloud services.
      </p>
      <p>
        Part of the job to be done was to connect 4 microservices built with
        Rust to a service bus and at that time Azure neither have an official
        client or SDK for Rust, so we try to made our integrations using a
        simple HTTP request with Shared Access Signatures (SAS).
      </p>
      <p>
        We found that authenticating and authorizing an application via Shared
        Access Signatures on Azure was quite convoluted and we thought that
        probably someone had done it before, and hopefully on Rust.
      </p>
      <p>
        We found that Francesco Cogno, a Microsoft software developer and a Rust
        enthusiast, was starting with an not official Azure SDK for Rust and he
        had resolved Shared Access Signatures.
      </p>
      <p>
        So as many of you know, we can import dependencies in Rust just
        declaring the repository URL and even set a branch to look.
      </p>
      <p>
        So we forked his repo and started to extend his library to plug into
        Service Bus. Probably a week later (don’t remember the exact length), he
        and his team started to do the same thing.{' '}
      </p>
      <p>
        We reached him and he was quite excited that his library was starting to
        be used in a real project. We suggested that we can make a pull request
        from our fork and if his team was happy could integrate it. They did it.
        We finished the project and then we forgot about it.
      </p>
      <p>
        In December 2020, Microsoft Azure GitHub organisation adopted
        Francesco’s work as part of their organisation.
        https://github.com/Azure/azure-sdk-for-rust And now our small
        contribution is part of Microsoft Azure SDK for Rust.
      </p>

      <Navigation />
    </main>
  </Styles>
);

export default AboutPage;
