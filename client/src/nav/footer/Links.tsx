import React, { FunctionComponent } from 'react';
import { Row } from 'reactstrap';
import { ILink, Link } from './Link';

const LINKS: ILink[] = [
  {
    text: 'About us',
    url: '/about-us'
  }, {
    text: 'My account',
    url: '/my-account'
  }, {
    text: 'Legal',
    url: '/legal'
  }
];

export interface IProps {
  links: ILink[];
}

const Links: FunctionComponent<IProps> = ({ links }) => {
  return (
    <Row className="text-center m-4">
      {links.map((link, index) =>
        <Link
          link={link}
          first={index === 0}
          last={index + 1 === links.length}
        />
      )}
    </Row>
  );
};

export const DefinedLinks: FunctionComponent = () =>
  <Links links={LINKS} />;
