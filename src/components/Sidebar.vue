<template>
  <aside class="page-menu">
    <div class="page-menu-inner">

      <nav class="sh-link-wrapper">
        <ul data-submenu-title="Apps">
          <li>
            <a href="#">
              <i class="uil-dashboard"></i>
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a href="chat">
              <i class="uil-comment-alt-dots"></i>
              <span>Chat</span>
            </a>
          </li>
          <li :class="{'active-submenu': activeEmail}">
            <a @click.prevent="activeEmail = !activeEmail">
              <i class="uil-envelope-alt"></i>
              <span>Email</span>
            </a>
            <ul>
              <li>
                <a href="email-inbox">Inbox</a>
                <a href="email-inbox-read">Email Read</a>
                <a href="email-compose">Email Compose</a>
              </li>
            </ul>
          </li>
          <li :class="{'active-submenu': activeCommerce}">
            <a @click.prevent="activeCommerce = !activeCommerce" href="#">
              <i class="uil-receipt"></i>
              <span>Report</span>
            </a>
            <ul>
              <li>
                <a href="shop-card">Products Grid</a>
              </li>
              <li>
                <a href="shop-listing">Products List</a>
              </li>
              <li>
                <a href="shop-product">Product</a>
              </li>
              <li>
                <a href="shop-cart">Products Cart</a>
              </li>
              <li>
                <a href="shop-checkout">Products Checkout</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>
<script>
export default {
  data () {
    return {
      activeEmail: false,
      activeCommerce: false
    }
  }
}
</script>
<style lang="scss">
.sh_control {
  .page-menu {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 0.5rem 0;
    margin-top: 72px;
    z-index: 9;
    transition: 0.3s;
    .page-menu-inner {
      width: 250px;
      transition: 0.3s;
      .sh-link-wrapper {
        width: 250px;
        transition: 0.3s;
        height: calc(100% - 80px);
        background: var(--white);
        overflow: auto;
        position: fixed;
        height: 100%;
        overflow: hidden scroll;
        ul {
          padding: 0;
          margin: 13px 0 0 0;
          li {
            display: block;
            transition: 0.3s;
            line-height: 25px;
            font-size: 15px;
            height: auto;
            a {
              color: #707070;
              display: flex;
              transition: 0.3s;
              cursor: pointer;
              position: relative;
              padding: 13px 25px;
              font-weight: 700;
              i {
                margin-right: 15px;
                width: 20px;
                font-size: 22px;
                color: var(--icon);
                transition: 0.3s;
                position: relative;
                top: 2px;
                display: inline-block;
                z-index: -1;
              }
              span {
                z-index: -1;
              }
            }
            a:after {
              font-family: 'Feather-Icons';
              content: '\e92e';
              opacity: 1;
              font-size: 16px;
              transition: 0.3s;
              opacity: 1;
              line-height: 17px;
              width: 17px;
              height: 17px;
              color: #a8a8a8;
              display: inline-block;
              border-radius: 3px;
              margin-left: 7px;
              text-indent: 0;
              top: 1px;
              position: absolute;
              right: 30px;
              top: 15px;
            }
            a:only-child:after {
              content: '';
              display: none;
            }
            ul {
              padding: 0;
              margin: 0;
              visibility: hidden;
              max-height: 0;
              opacity: 0;
              line-height: 0;
              transition: 0.3s;
              pointer-events: none;
              display: none;
              li {
                background-color: transparent;
                border: none;
                padding-left: 63px;
                position: relative;
                margin: 0;
                a {
                  padding: 9px 0 !important;
                }
                a:after {
                  content: '';
                  display: none;
                }
              }
              li:hover {
                background: none;
              }
            }
            ul:before {
              content: '';
              display: none;
            }
          }
          li.active-submenu ul {
            visibility: visible;
            padding: 0px 0 13px 0;
            line-height: 24px;
            opacity: 1;
            max-height: 220px;
            pointer-events: all;
            margin-top: 0 !important;
            padding-top: 0 !important;
            display: block;
          }
          li.active-submenu a:after {
            content: '\e931';
          }
          li:hover {
            background-color: rgba(102, 103, 107, 0.04);
            width: 100%;
          }
        }
        ul:before {
          content: attr(data-submenu-title);
          padding: 0 28px;
          margin-bottom: 5px;
          display: block;
          color: var(--gray-soft);
          font-weight: 600;
          font-size: 13px;
        }
      }
    }
  }
}
@media (max-width: 768px) {
  .menu_callaped {
    .sh_sticky {
      .head_logo {
        width: 75px;
        transition: 0.5s;
      }
    }
    .sh_control {
      .page-menu {
        .page-menu-inner {
          width: 70px;
          transition: 0.5s;
          .sh-link-wrapper {
            width: 70px;
            transition: 0.5s;
            ul {
              li {
                a {
                  text-align: center;
                  padding: 0.8125rem 1.2625rem;
                  span {
                    display: none;
                  }
                  i {
                    margin-right: 0;
                    font-size: 1.8em;
                    width: 100%;
                    transition: 0.3s;
                    position: relative;
                    top: 2px;
                  }
                }
                a:after {
                  content: '';
                  display: none;
                }
                ul {
                  li {
                    border: none;
                    padding-left: 0px;
                    text-align: center;
                    margin: 0;
                    a {
                      font-size: 12px;
                      text-align: center;
                    }
                  }
                }
              }
            }
            ul:before {
              content: attr(data-submenu-title);
              margin-bottom: 5px;
              display: block;
              color: var(--gray-soft);
              font-weight: bolder;
              font-size: 15px;
              text-align: center;
              margin-left: -10px;
            }
          }
        }
      }
    }
  }
}
@media (max-width: 690px) {
  .sh_control {
    .page-menu {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      padding: 0.5rem 0;
      margin-top: 72px;
      z-index: 9;
      transition: 0.3s;
      display: none;
      .page-menu-inner {
        width: -250px;
        transition: 0.3s;
        .sh-link-wrapper {
          width: -250px;
          transition: 0.3s;
          height: calc(100% - 80px);
          background: var(--white);
          overflow: auto;
          position: fixed;
          height: 100%;
          overflow: hidden scroll;
          ul {
            padding: 0;
            margin: 13px 0 0 0;
            li {
              display: block;
              transition: 0.3s;
              line-height: 25px;
              font-size: 15px;
              height: auto;
              a {
                color: #707070;
                display: flex;
                transition: 0.3s;
                cursor: pointer;
                position: relative;
                padding: 13px 25px;
                font-weight: 700;
                i {
                  margin-right: 15px;
                  width: 20px;
                  font-size: 22px;
                  color: var(--icon);
                  transition: 0.3s;
                  position: relative;
                  top: 2px;
                  display: inline-block;
                  z-index: -1;
                }
                span {
                  z-index: -1;
                }
              }
              a:after {
                font-family: 'Feather-Icons';
                content: '\e92e';
                opacity: 1;
                font-size: 16px;
                transition: 0.3s;
                opacity: 1;
                line-height: 17px;
                width: 17px;
                height: 17px;
                color: #a8a8a8;
                display: inline-block;
                border-radius: 3px;
                margin-left: 7px;
                text-indent: 0;
                top: 1px;
                position: absolute;
                right: 30px;
                top: 15px;
              }
              a:only-child:after {
                content: '';
                display: none;
              }
              ul {
                padding: 0;
                margin: 0;
                visibility: hidden;
                max-height: 0;
                opacity: 0;
                line-height: 0;
                transition: 0.3s;
                pointer-events: none;
                display: none;
                li {
                  background-color: transparent;
                  border: none;
                  padding-left: 63px;
                  position: relative;
                  margin: 0;
                  a {
                    padding: 9px 0 !important;
                  }
                  a:after {
                    content: '';
                    display: none;
                  }
                }
                li:hover {
                  background: none;
                }
              }
              ul:before {
                content: '';
                display: none;
              }
            }
            li.active-submenu ul {
              visibility: visible;
              padding: 0px 0 13px 0;
              line-height: 24px;
              opacity: 1;
              max-height: 220px;
              pointer-events: all;
              margin-top: 0 !important;
              padding-top: 0 !important;
              display: block;
            }
            li.active-submenu a:after {
              content: '\e931';
            }
            li:hover {
              background-color: rgba(102, 103, 107, 0.04);
              width: 100%;
            }
          }
          ul:before {
            content: attr(data-submenu-title);
            padding: 0 28px;
            margin-bottom: 5px;
            display: block;
            color: var(--gray-soft);
            font-weight: 600;
            font-size: 13px;
          }
        }
      }
    }
  }
  .menu_mobile_callaped {
    .sh_control {
      .sh_sticky{
        .head_content{
          .icon_collaped{
            margin-left: 4px;
            i{
            color: var(--purple);
            }
          }
        }
      }
      .page-menu {
        margin-top: 60px;
        display: block;
        .page-menu-inner {
          width: 70px;
          transition: 0.5s;
          .sh-link-wrapper {
            width: 70px;
            transition: 0.5s;
            ul {
              li {
                a {
                  text-align: center;
                  padding: 13px 20px;
                  span {
                    display: none;
                  }
                  i {
                    margin-right: 0;
                    font-size: 1.8em;
                    width: 100%;
                    transition: 0.3s;
                    position: relative;
                    top: 2px;
                  }
                }
                a:after {
                  content: '';
                  display: none;
                }
                ul {
                  li {
                    border: none;
                    padding-left: 0px;
                    text-align: center;
                    margin: 0;
                    a {
                      font-size: 12px;
                      text-align: center;
                    }
                  }
                }
              }
            }
            ul:before {
              content: attr(data-submenu-title);
              margin-bottom: 5px;
              display: block;
              color: var(--gray-soft);
              font-weight: bolder;
              font-size: 15px;
              text-align: center;
              margin-left: -11px;
            }
          }
        }
      }
    }
  }
}
</style>
