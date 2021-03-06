import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './sidebar_component.module.scss';

const SidebarComponent = props => {
  const { user } = props;

  return (
    <>
      <div className={styles.logo}>
        <Link to="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="156" height="48" viewBox="0 0 156 48">
            <g fill="none" fillRule="evenodd">
              <path
                fill="#f6704d"
                // eslint-disable-next-line max-len
                d="M37.06 13.12s0-.97-1.07-.97H18.3s-1.47 0-1.47 1.34v1.6s0 1.3 1.47 1.3h.63l17.18-2c.3-.1 1-.2 1-1V13zm-20.14 20.7v.4s0 .97 1.06.97h17.7s1.46 0 1.46-1.4v-1.6s0-1.4-1.46-1.4h-.64l-17.18 2c-.27 0-.94.2-.94.9"
              ></path>
              <path
                fill="#ffd138"
                // eslint-disable-next-line max-len
                d="M18.98 18.5v-.13c.04-.36.23-.57.44-.7l.1-.05c.03 0 .05 0 .07-.02.1-.05.2-.07.3-.08l17.2-2h.6c1.4 0 1.4 1.33 1.4 1.33v3.68s0 1.33-1.5 1.33H37l-17.2-2c-.06 0-.2-.04-.3-.1h-.07l-.1-.06c-.2-.12-.4-.34-.43-.7v-.5z"
              ></path>
              <path
                fill="#488ed8"
                // eslint-disable-next-line max-len
                d="M36.46 23.92v-.03c0-.1 0-.1-.02-.1-.03-.4-.22-.6-.43-.7l-.1-.1-.3-.1-17.1-2h-.6c-1.4 0-1.4 1.3-1.4 1.3v3.7s0 1.3 1.48 1.3h.64l17.18-2c.1-.1.25-.1.38-.1l.1-.1c.24-.2.4-.4.46-.7v-.5z"
              ></path>
              <path
                fill="#fff"
                // eslint-disable-next-line max-len
                d="M39 27.1s-.12-1.07-1.4-.92l-5.9.73-5.7.7-5.93.8c-1.27.2-1.14 1.2-1.14 1.2l.12 1c.1.9.93.9 1.26.9l6.2-.7 5.6-.7 6.1-.7c.3 0 1.1-.3 1-1.2l-.1-.9z"
              ></path>
              <path
                fill="#fff"
                // eslint-disable-next-line max-len
                d="M86.6 20.83h-.06V12.3c0-.72-.4-1.17-1.08-1.17-.7 0-1.12.45-1.12 1.18v20.4c0 .8.42 1.2 1.12 1.2.67 0 1.08-.4 1.08-1.2V26c0-3.64 2.07-5.94 5.32-5.94 3.18 0 4.87 1.82 4.87 5.3v7.3c0 .74.4 1.2 1.1 1.2.7 0 1.1-.46 1.1-1.2v-7.5c0-4.6-2.3-7.07-6.6-7.07-2.6 0-4.58 1-5.73 2.7zm49.06 5.23c0-4.78-3.12-7.97-7.7-7.97-2.74 0-4.88 1-6.1 2.8h-.05v-1.5c0-.8-.4-1.2-1.1-1.2-.7 0-1.1.4-1.1 1.2v19.2c0 .7.4 1.1 1.1 1.1.7 0 1.1-.5 1.1-1.2v-7.4h.1c1.2 1.8 3.4 2.8 6.1 2.8 4.6 0 7.7-3.2 7.7-8m-2.2 0c0 3.53-2.4 6-5.8 6s-5.8-2.47-5.8-6 2.4-6 5.8-6c3.5 0 5.9 2.4 5.9 6m-70.2 6H63c-1.35 0-2-.8-2-2.4v-4c0-.8-.4-1.2-1.1-1.2-.67 0-1.1.4-1.1 1.2v4c0 2.8 1.48 4.3 3.96 4.3h.58c.68 0 1.1-.4 1.1-1s-.4-1-1.1-1zm2-13.78c-.3-.6-.9-.73-1.5-.36L61 19.5v-5c0-.75-.4-1.2-1.1-1.2-.7 0-1.1.45-1.1 1.2v6.3L56.72 22c-.68.4-.8.94-.5 1.52.34.6.9.76 1.57.38l7-4.08c.6-.36.8-.95.5-1.55m35.9 7.65c0 4.73 3.3 8 8 8 4.8 0 8.1-3.27 8.1-8 0-4.76-3.3-8-8.1-8s-8.1 3.24-8.1 8zm2.2 0c0-3.58 2.4-6 5.8-6 3.5 0 5.8 2.42 5.8 6s-2.4 6-5.9 6c-3.5 0-5.9-2.42-5.9-6zm-22 4.52c0-.63-.4-1.05-1.1-1.05-.4 0-.6.1-.8.3-1.1 1.4-2.7 2.2-4.8 2.2-3.45 0-5.8-2.4-5.8-6s2.35-6 5.8-6c1.8 0 3.32.6 4.4 1.8.23.2.5.4.84.4.6 0 1-.4 1-1.1 0-.3-.06-.5-.25-.7-1.55-1.6-3.6-2.4-6-2.4-4.75 0-8.04 3.2-8.04 7.9s3.23 8 8 8c2.7 0 4.9-1.1 6.32-2.9.1-.2.2-.4.2-.6z"
              ></path>
            </g>
          </svg>
        </Link>
      </div>
      <div className={styles.header}>
        <h2 className={styles.organisationName}>tchop</h2>
        <h3 className={styles.channelName}>well channel name</h3>
      </div>
      <nav className={styles.navigation}>
        <ul>
          <hr />
          <li>
            <NavLink to="/stories/" activeClassName={styles.active}>
              Mixes
            </NavLink>
          </li>
          <li>
            <NavLink to="/news-feed" activeClassName={styles.active}>
              News feed
            </NavLink>
          </li>
          <li>
            <NavLink to="/integrations" activeClassName={styles.active}>
              Integrations
            </NavLink>
          </li>
          <li>
            <NavLink to="/push-notes" activeClassName={styles.active}>
              Notifications
            </NavLink>
          </li>
          <li>
            <NavLink to="/chats" activeClassName={styles.active}>
              Chats
            </NavLink>
          </li>
          <hr />
          <li>
            <NavLink to="/curators" activeClassName={styles.active}>
              Curators
            </NavLink>
          </li>
          <li>
            <NavLink to="/readers" activeClassName={styles.active}>
              Readers
            </NavLink>
          </li>
          <hr />
          <li>
            <NavLink to="/settings" activeClassName={styles.active}>
              Settings
            </NavLink>
          </li>
          <li>
            <NavLink to="/developers" activeClassName={styles.active}>
              Developers
            </NavLink>
          </li>
          <li>
            <NavLink to="/apps" activeClassName={styles.active}>
              Apps
            </NavLink>
          </li>
          <li>
            <NavLink to="/setup" activeClassName={styles.active}>
              Setup guide
            </NavLink>
          </li>
        </ul>
      </nav>
      <footer className={styles.footer}>
        <div className={styles.profile}>
          <NavLink to="/me">
            <div className={styles.avatar}>S</div>
          </NavLink>
          <div className={styles.info}>
            <p className={styles.name}>silent</p>
            <p className={styles.role}>admin</p>
            <NavLink to="/me">Go to your profile</NavLink>
          </div>
        </div>
        <section className={styles.links}>
          <p>
            <a
              href="https://chrome.google.com/webstore/detail/tchop-curator-extension/acffclopdpmfepllledpjjppenpbcmlk"
              rel="noopener noreferrer"
              target="_blank"
            >
              Browser plug-in
            </a>
            <br />
            <a
              href="https://tchop.zendesk.com/hc/en-us/categories/201410689-FAQs-for-app-curators"
              rel="noopener noreferrer"
              target="_blank"
            >
              FAQ
            </a>
            <span> ??? </span>
            <a href="https://tchop.io/privacy" rel="noopener noreferrer" target="_blank">
              Privacy policy
            </a>
            <span> ??? </span>
            <a href="https://tchop.io/terms_of_service" rel="noopener noreferrer" target="_blank">
              Terms of service
            </a>
          </p>
          <p className={styles.copyright}>?? tchop GmbH 2017</p>
        </section>
      </footer>
    </>
  );
};

export default SidebarComponent;
