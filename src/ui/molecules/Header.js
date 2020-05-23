import React from 'react';
import styled from "styled-components";
import PropTypes from "prop-types";
import Icon from "../atoms/Icon";

const HeaderWrapper = styled.ul`
  display: flex;
	justify-content: flex-end;
	align-items: center;
  width: 375px;
  height: 56px;
  padding: 16px 16px 8px;
  background-color: black;
`;

const Header = props => {
  const { iconsList } = props;

  return (
    <HeaderWrapper>
        {iconsList.map((icon, i) => (
          <Icon url={icon} key={i} />
        ))}
    </HeaderWrapper>
  )
}

Header.propTypes ={
  icons: PropTypes.array
};

Header.defaultProps = {};

export default Header;