import React, { Fragment, useEffect, useState } from "react";
import { toast } from "react-toastify";

const TestSideNav = () => {
  return (
    <Fragment>
      <div
        id='full-screen-example'
        className='sidenav my-side fixed mdb-sidenav bg-light'
        data-color='dark'
        data-mode='side'
        data-hidden='false'
        data-scroll-container='#scrollContainer'
      >
        <div className='mt-4'>
          <div id='header-content' className='pl-3'>
            <h4>
              <span>Ann Smith</span>
            </h4>
            <p>ann_s@mdbootstrap.com</p>
          </div>
          <hr className='mb-0' />
        </div>
        <div id='scrollContainer'>
          <ul className='sidenav-menu'>
            <li className='sidenav-item'>
              <a className='sidenav-link' href='/'>
                <i className='fas fa-envelope fa-fw mr-3'></i>Inbox
              </a>
            </li>
            <li className='sidenav-item'>
              <a className='sidenav-link'>
                <i className='fas fa-paper-plane fa-fw mr-3'></i>Outbox
              </a>
            </li>
            <li className='sidenav-item'>
              <a className='sidenav-link'>
                <i className='fas fa-address-book fa-fw mr-3'></i>Contacts
              </a>
              <ul className='sidenav-collapse'>
                <li className='sidenav-item'>
                  <a className='sidenav-link'>Family</a>
                </li>
                <li className='sidenav-item'>
                  <a
                    className='sidenav-link'
                    href='/previews/mdb-ui-kit/sidenav/2.html'
                  >
                    Friends
                  </a>
                </li>
                <li className='sidenav-item'>
                  <a className='sidenav-link'>Work</a>
                </li>
              </ul>
            </li>
            <li className='sidenav-item'>
              <a className='sidenav-link'>
                <i className='fas fa-file fa-fw mr-3'></i>Drafts
              </a>
            </li>
            <li className='sidenav-item'>
              <a className='sidenav-link'>
                <i className='fas fa-heart fa-fw mr-3'></i>Favourites
              </a>
            </li>
            <li className='sidenav-item'>
              <a className='sidenav-link'>
                <i className='fas fa-star fa-fw mr-3'></i>Starred
              </a>
            </li>
            <li className='sidenav-item'>
              <a className='sidenav-link'>
                <i className='fas fa-trash fa-fw mr-3'></i>Trash
              </a>
            </li>
            <li className='sidenav-item'>
              <a className='sidenav-link'>
                <i className='fas fa-ban fa-fw mr-3'></i>Spam
              </a>
            </li>
            <li className='sidenav-item'>
              <a className='sidenav-link'>
                <i className='fas fa-tag fa-fw mr-3'></i>Categories
              </a>
              <ul className='sidenav-collapse'>
                <li className='sidenav-item'>
                  <a className='sidenav-link'>Social</a>
                </li>
                <li className='sidenav-item'>
                  <a className='sidenav-link'>Notifications</a>
                </li>
                <li className='sidenav-item'>
                  <a className='sidenav-link'>Recent</a>
                </li>
                <li className='sidenav-item'>
                  <a className='sidenav-link'>Uploads</a>
                </li>
                <li className='sidenav-item'>
                  <a className='sidenav-link'>Backups</a>
                </li>
                <li className='sidenav-item'>
                  <a className='sidenav-link'>Offers</a>
                </li>
              </ul>
            </li>
            <li className='sidenav-item'>
              <a className='sidenav-link'>
                <i className='fas fa-sticky-note fa-fw mr-3'></i>Notes
              </a>
            </li>
            <li className='sidenav-item'>
              <a className='sidenav-link'>
                <i className='fas fa-user-circle fa-fw mr-3'></i>Personal
              </a>
            </li>
            <li className='sidenav-item'>
              <a className='sidenav-link'>
                <i className='fas fa-ellipsis-h fa-fw mr-3'></i>More
              </a>
            </li>
          </ul>
          <hr className='m-0' />
          <ul className='sidenav-menu'>
            <li className='sidenav-item'>
              <a className='sidenav-link'>
                <i className='fas fa-cogs fa-fw mr-3'></i>Settings
              </a>
            </li>
            <li className='sidenav-item'>
              <a className='sidenav-link'>
                <i className='fas fa-user fa-fw mr-3'></i>Profile
              </a>
            </li>
            <li className='sidenav-item'>
              <a className='sidenav-link'>
                <i className='fas fa-shield-alt fa-fw mr-3'></i>Privacy
              </a>
            </li>
            <li className='sidenav-item'>
              <a className='sidenav-link'>
                <i className='fas fa-user-astronaut fa-fw mr-3'></i>Log out
              </a>
            </li>
          </ul>
        </div>
        <div className='text-center'>
          <hr className='mb-4 mt-0' />
          <p>MDBootstrap.com</p>
        </div>
      </div>
    </Fragment>
  );
};

export default TestSideNav;
