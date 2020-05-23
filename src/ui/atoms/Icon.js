import React from 'react';
import styled from "styled-components";
import PropTypes from "prop-types";
import Avatar from '../../icons/avatar.svg'
import Discover from '../../icons/discover.svg'
import LeftIcon from '../../icons/left-icon.svg'
import Notification from '../../icons/notification.svg'
import Search from '../../icons/search.svg'
import Social from '../../icons/social.svg'

export const icons = {
  avatar: Avatar,
  discover: Discover,
  leftIcon: LeftIcon,
  notification: Notification,
  search: Search,
  social: Social
}

const IconImage = styled.img`
  width: ${ props => props.url === icons.avatar ? '32px' : '24px'};
  height: ${ props => props.url === icons.avatar ? '32px' : '24px'};
`;

const IconWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: 0 10px;
  &:first-child {
		margin-right: auto;
		margin-left: 0;
	}
	&:last-child {
		margin-right: 0;
	}
`;

const Icon = props => {
  const { url } = props;
    return (
      <IconWrapper>
        <IconImage {...props} src={url}/>
      </IconWrapper>
    )
};

Icon.propTypes = {

  // J'ai voulu definir le proptypes pour que ca ne prenne en compte que ce qui est defini
  // dans icons plus haut, seulement cela ne marche pas avec les url j'ai donc defini en tant que string
  // url: PropTypes.oneOf(Object.keys(icons))

  url: PropTypes.string
};

Icon.defaultProps = {
  url: null
};

export default Icon;