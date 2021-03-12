import React from 'react';

const conversation = [
  { person: 'pedro', component: () => <p>Hello there.</p> },

  { person: 'audience-member', component: () => <p>Hi.</p> },
  { person: 'audience-member', component: () => <p>Who are you?</p> },

  {
    person: 'pedro',
    component: () => (
      <p>I am the Web developer at Red Badger with the dodgy accent.</p>
    ),
  },
  {
    person: 'audience-member',
    component: () => <p>You all sound a bit dodgy to me.</p>,
  },
  { person: 'audience-member', component: () => <p>Ok. What do you want?</p> },

  {
    person: 'pedro',
    component: () => (
      <p>
        Look, I need to deliver a lightning talk about how a bit of code that we
        did for a client was adopted by Microsoft Azure.
      </p>
    ),
  },
  {
    person: 'audience-member',
    component: () => <p>Ok. So that sounds like you want to show off.</p>,
  },
  {
    person: 'pedro',
    component: () => <p>Mmm, well, I think you might be right.</p>,
  },

  {
    person: 'audience-member',
    component: () => <p>Cool, so what do you need from me?</p>,
  },
  {
    person: 'pedro',
    component: () => (
      <p>
        Just listen and tell me what you think about how I audience-member
        telling the story.
      </p>
    ),
  },
  { person: 'audience-member', component: () => <p>All right. Shoot.</p> },

  { person: 'pedro', component: () => <p>Thanks.</p> },
  {
    person: 'pedro',
    component: () => (
      <p>
        Last year, just before the pandemic started, I was part of the
        teaudience-member working at MHRA.
      </p>
    ),
  },

  {
    person: 'audience-member',
    component: () => <p>and what does MHRA stand for?</p>,
  },
  {
    person: 'audience-member',
    component: () => <p> Medical Hair Restoration Australia?</p>,
  },
  {
    person: 'audience-member',
    component: () => <p>Michigan Hot Rod Association?</p>,
  },

  {
    person: 'pedro',
    component: () => (
      <p>No, Medicines & Healthcare products Regulatory Agency.</p>
    ),
  },
  {
    person: 'audience-member',
    component: () => <p>Ok, and what do they do?</p>,
  },

  {
    person: 'pedro',
    component: () => (
      <p>
        They are an agency under the UK Department of Health, responsible for
        licencing medicines and healthcare products.
      </p>
    ),
  },
  {
    person: 'audience-member',
    component: () => <p>Like approving coronavirus vaccines? </p>,
  },
  { person: 'pedro', component: () => <p>Yeap</p> },
  {
    person: 'audience-member',
    component: () => <p>So that’s where I’ve heard of them!</p>,
  },
  {
    person: 'pedro',
    component: () => (
      <p>
        The work we were doing was to replace an old Web application that
        provides members of the public with information about all the medicines
        that are sold in the UK.{' '}
      </p>
    ),
  },
  {
    person: 'pedro',
    component: () => (
      <p>
        Imagine that you are buying ibuprofen from Tesco and when you open the
        box you find a leaflet with information about active substances, side
        effects, etc.
      </p>
    ),
  },
  { person: 'audience-member', component: () => <p>Got it.</p> },

  {
    person: 'pedro',
    component: () => (
      <p>
        Part of our work was to connect 4 microservices built with Rust to
        Microsoft Azure service bus.
      </p>
    ),
  },
  {
    person: 'audience-member',
    component: () => <p>Ok, when is the exciting part coming?</p>,
  },
  {
    person: 'pedro',
    component: () => (
      <p>please, bear with, I promise I will deliver a big bang.</p>
    ),
  },
  { person: 'audience-member', component: () => <p>... Ok.</p> },

  {
    person: 'pedro',
    component: () => (
      <p>
        So, at that time Azure had no official client or SDK for Rust, so we
        tried to make our integrations using simple HTTP requests to the Azure
        API with Shared Access Signatures (SAS).
      </p>
    ),
  },
  { person: 'audience-member', component: () => <p>What the f… is SAS?</p> },

  {
    person: 'pedro',
    component: () => (
      <p>
        Shared Access Signatures are keys that can be used by a 3rd party to
        access a specific resource. In general, the SAS key is included in the
        URL that is used to access the resource.{' '}
      </p>
    ),
  },
  {
    person: 'audience-member',
    component: () => <p>Sorry, I did not understand anything you just said.</p>,
  },
  { person: 'pedro', component: () => <p>I blaudience-membere my accent.</p> },

  {
    person: 'pedro',
    component: () => (
      <p>
        Imagine that you are going to a secret party during lockdown and the
        bouncer is asking you to give her a passcode, this passcode can be
        overheard and used by another person. Now imagine that the passcode
        contains encrypted details of who you are and has an expiry time. Now if
        another person tries to use it the bouncer can verify if that person is
        really you.
      </p>
    ),
  },

  {
    person: 'audience-member',
    component: () => <p>Oh wow, that sounds very secure.</p>,
  },

  {
    person: 'pedro',
    component: () => (
      <p>
        Well, yes, but it’s a pain to create a SAS by scratch, so I asked a more
        experienced developer to pair with me and we couldn’t make it. Then we
        called our technical lead to help us…. and we had the saudience-membere
        result.
      </p>
    ),
  },

  {
    person: 'audience-member',
    component: () => (
      <p>Well, why didn’t you follow the Azure documentation?</p>
    ),
  },

  {
    person: 'pedro',
    component: () => (
      <p>
        Well, we did, but it’s not great. So we looked on GitHub to see if
        someone had implemented it already on Rust.
      </p>
    ),
  },

  { person: 'audience-member', component: () => <p>And…?</p> },

  {
    person: 'pedro',
    component: () => (
      <p>
        We found the work of Francesco Cogno, a Microsoft software developer and
        a Rust enthusiast, that was starting with an unofficial Azure SDK for
        Rust and he had implemented Shared Access Signatures.
      </p>
    ),
  },

  {
    person: 'audience-member',
    component: () => (
      <p>Nice, so you just copy-pasted their work into your project?</p>
    ),
  },

  {
    person: 'pedro',
    component: () => (
      <p>That is open source prograudience-memberming in a nutshell baby!</p>
    ),
  },
  { person: 'pedro', component: () => <p>But yes, kind of.</p> },

  {
    person: 'pedro',
    component: () => (
      <p>
        In Rust land we can import dependencies by just declaring the repository
        URL and we can even target a specific branch.
      </p>
    ),
  },

  { person: 'audience-member', component: () => <p>No way, REALLY!</p> },

  { person: 'pedro', component: () => <p>Yeah, it’s f****ing cool!</p> },

  {
    person: 'pedro',
    component: () => (
      <p>
        So we forked his repo and started to extend his library to plug into
        Service Bus. And a week later, he and his teaudience-member started to
        do the saudience-membere thing.
      </p>
    ),
  },

  {
    person: 'audience-member',
    component: () => <p>Really...mmm, what a coincidence?!</p>,
  },

  {
    person: 'pedro',
    component: () => <p>Yeah, I couldn't believe our luck too.</p>,
  },

  {
    person: 'pedro',
    component: () => (
      <p>
        So, we reached out to him and he was quite excited that his library was
        being used in a real project. We suggested that we could make a pull
        request from our fork and if his teaudience-member were happy, they
        could integrate it. They did it. We finished the project and then we
        forgot about it.
      </p>
    ),
  },

  {
    person: 'audience-member',
    component: () => (
      <p>Ok, that is the most anti-climactic way to finish your talk.</p>
    ),
  },

  { person: 'pedro', component: () => <p>I know, but there is more.</p> },

  {
    person: 'audience-member',
    component: () => (
      <p>
        Ok, I audience-member running out of time, could you make it brief
        please?
      </p>
    ),
  },

  {
    person: 'pedro',
    component: () => (
      <p>
        So, In December 2020, Microsoft Azure GitHub organisation adopted
        Francesco’s work as part of their organisation.
        https://github.com/Azure/azure-sdk-for-rust And now our small
        contribution is part of the Microsoft Azure SDK for Rust.{' '}
      </p>
    ),
  },

  {
    person: 'audience-member',
    component: () => <p>That is still not a big bang, but it is cool.</p>,
  },
  {
    person: 'audience-member',
    component: () => <p>So is this talk to showing off</p>,
  },

  { person: 'pedro', component: () => <p>Well, yes a bit.</p> },
  {
    person: 'pedro',
    component: () => <p>Do you have any feedback for the talk?</p>,
  },

  {
    person: 'audience-member',
    component: () => (
      <p>
        You can say to them: that as part of your client facing work you
        contributed to a non-official open source project that was later adopted
        by Microsoft and then you will save them 5 mins of their time.
      </p>
    ),
  },

  {
    person: 'pedro',
    component: () => (
      <p>
        Yeah, probably I would just do that. Thanks for your time, random
        audience member
      </p>
    ),
  },
];

export default conversation;
