<template>
  <header class="sh_sticky" :class="{header_fixed: scrollPosition > 70}">
    <div class="flex">
      <div class="head_logo" v-if="$resize && $mq.above(690)"></div>
      <div class="head_content flex content-center flex-wrap justify-between align-middle">
        <div class="icon_collaped flex content-center flex-wrap">
          <a @click="setMenu()" v-if="$resize && $mq.above(690)">
            <i class="uil-align-center-h"></i>
          </a>

          <a @click="setMenuMobile()" v-if="$resize && $mq.below(690)">
            <i class="uil-align-center"></i>
          </a>
        </div>
        <div class="sh_search">
          <form>
            <div class="sh_search_menu" v-if="$resize && $mq.above(690)">
              <input
                type="text"
                class="form-control"
                placeholder="Search for Customers, Products, Files and more.."
              />
              <i class="s_icon uil-search-alt"></i>
            </div>
          </form>
        </div>
        <div class="head_user">
          <div class="flex content-center flex-wrap">
            <a
              class="opts_icon icon_app_link uk-open"
              v-click-outside="hideDropDownMennu"
              @click="toggleDropDownMenu"
            >
              <i class="uil-apps"></i>
            </a>
            <div
              class="icon-browse uk-dropdown uk-open"
              v-show="dropDownMenu"
              style="right: 50px; top: 75px;"
            >
              <a href="#" class="icon-menu-item">
                <i class="uil-shop"></i> Dashboard
              </a>
              <a href="#" class="icon-menu-item">
                <i class="uil-envelope-alt"></i> Messages
              </a>
              <a href="#" class="icon-menu-item">
                <i class="uil-bookmark"></i> Bookmark
              </a>
              <a href="#" class="icon-menu-item">
                <i class="uil-shopping-basket"></i> Cart
              </a>
              <a href="#" class="icon-menu-item">
                <i class="uil-shield-check"></i> Privacy
              </a>
              <a href="#" class="icon-menu-item">
                <i class="uil-bolt-alt"></i> Upgrade
              </a>
              <a href="#" class="more-app">More Features</a>
            </div>
            <a href class="opts_account flex content-center flex-wrap">
              <img src="../assets/img/team-1.jpg" alt />
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import ClickOutside from 'vue-click-outside'
export default {
  data () {
    return {
      scrollPosition: null,
      openDropDown: false,
      dropDownMenu: false
    }
  },
  methods: {
    toggleDropDownMenu () {
      this.dropDownMenu = !this.dropDownMenu
    },

    hideDropDownMennu () {
      this.dropDownMenu = false
    },
    setMenu () {
      this.active = !this.active
      const sitebody = document.body
      this.active
        ? sitebody.classList.add('menu_callaped')
        : sitebody.classList.remove('menu_callaped')
    },
    setMenuMobile () {
      this.active = !this.active
      const sitebody = document.body
      this.active
        ? sitebody.classList.add('menu_mobile_callaped')
        : sitebody.classList.remove('menu_mobile_callaped')
    },
    updateScroll () {
      this.scrollPosition = window.scrollY
    }
  },
  mounted () {
    window.addEventListener('scroll', this.updateScroll)
  },
  directives: {
    ClickOutside
  }
}
</script>

<style lang="scss">
.sh_control {
  /*height: 80px;*/
  width: 100%;
  z-index: 1;
  min-height: 100%;
  .sh_sticky {
    width: 100%;
    position: fixed;
    top: 0;
    left: auto;
    background: none;
    height: 80px;
    right: 0;
    z-index: 9;
    .head_logo {
      width: 290px;
      height: 80px;
      background: var(--white);
      transition: 0.3s;
      z-index: 99;
    }
    .head_content {
      height: 80px;
      width: 100%;
      padding-right: 15px;
      position: relative;
      .icon_collaped {
        cursor: pointer;
        i {
          font-size: 2.2em;
          font-weight: lighter;
          color: var(--white);
          transition: 0.3s;
          padding: 0 15px;
          display: inline-block;
        }
      }
      .sh_search {
        flex: 1;
        min-width: 1px;
        form {
          width: calc(100% - 360px);
          .sh_search_menu {
            position: relative;
            display: flex;
            input {
              height: 44px;
              padding: 0 30px 0 45px;
              border-radius: 3px;
              width: 100%;
              outline: 0;
              float: left;
              border: 1px solid rgba(230, 230, 230, 0.05);
              background: rgba(187, 187, 187, 0.3);
              font-size: 14px;
              outline: 0;
              margin-bottom: 0;
              box-shadow: none;
              color: var(--white);
            }
            input.form-control {
              width: 100%;
              background-clip: padding-box;
              // border: 1px solid #ced4da;
            }
            ::placeholder {
              color: var(--white);
              opacity: 1; /* Firefox */
            }

            :-ms-input-placeholder {
              color: var(--white);
            }

            ::-ms-input-placeholder {
              color: var(--white);
            }
            i.s_icon {
              position: absolute;
              pointer-events: none;
              top: 50%;
              left: 17px;
              transform: translateY(-50%);
              color: var(--white);
            }
          }
        }
      }
      .head_user {
        .opts_icon {
          margin-left: 10px;
          font-size: 20px;
          position: relative;
          padding: 6px 9px;
          margin-top: 4px;
          color: var(--white);
          cursor: pointer;
        }
        .opts_account > img {
          margin-left: 12px;
          width: 36px;
          height: 36px;
          object-fit: cover;
          border-radius: 50%;
          cursor: pointer;
        }
      }
    }
  }
  .header_fixed {
    background: var(--white);
    .head_content {
      .icon_collaped {
        i {
          font-size: 2.2em;
          font-weight: lighter;
          color: var(--gray);
          transition: 0.3s;
          padding: 0 15px;
          display: inline-block;
        }
      }
      .sh_search {
        form {
          .sh_search_cont {
            input.form-control {
              border: 1px solid rgba(230, 230, 230, 0.05);
              background: rgba(187, 187, 187, 0.3);
              color: var(--gray);
            }
            ::placeholder {
              color: var(--gray);
              opacity: 1; /* Firefox */
            }

            :-ms-input-placeholder {
              color: var(--gray);
            }

            ::-ms-input-placeholder {
              color: var(--gray);
            }
            i.s_icon {
              position: absolute;
              pointer-events: none;
              top: 50%;
              left: 17px;
              transform: translateY(-50%);
              color: var(--gray);
            }
          }
        }
      }
    }
  }
}
.menu_callaped {
  .sh_sticky {
    .head_logo {
      width: 105px;
      transition: 0.5s;
    }
  }
  .sh_control {
    .page-menu {
      .page-menu-inner {
        width: 100px;
        transition: 0.5s;
        .sh-link-wrapper {
          width: 100px;
          transition: 0.5s;
          ul {
            li {
              a {
                text-align: center;
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
          }
        }
      }
    }
  }
}

.uk-dropdown {
  display: none;
  position: absolute;
  z-index: 1020;
  box-sizing: border-box;
  min-width: 200px;
  padding: 20px;
  background: #fff;
  color: #666;
  box-shadow: 0 5px 12px rgba(0, 0, 0, 0.15);
}
.uk-dropdown.uk-open {
  display: block;
}
header .icon-browse {
  width: 220px;
  padding: 1.5rem 1rem;
  padding-bottom: 0;
  border-radius: 0.75rem;
}
header .icon-browse .icon-menu-item {
  width: 90px;
  display: inline-block;
  text-align: center;
  margin-bottom: 1.7rem;
  color: rgba(33, 33, 33, 0.8);
}
header .icon-browse .icon-menu-item i {
  font-size: 28px;
  line-height: 42px;
  display: block;
}
header .icon-browse .more-app {
  background: #f7f7f7;
  border-radius: 0 0 10px 10px;
  padding: 10px 0;
  text-align: center;
  color: #969696;
  width: 220px;
  display: inline-block;
  margin-bottom: 0;
  font-size: 14px;
  margin: 0 -15px;
  border-top: 1px solid #eaeaea;
}
@media (max-width: 1366px) {
  .sh_control {
    .sh_sticky {
      .head_logo {
        width: 305px;
        height: 80px;
      }
      .head_content {
        height: 60px;
        .icon_collaped{
          margin-top: 15px;
        }
        .sh_search {
          flex: 1;
          min-width: 1px;
          margin-top:15px;
          form {
            width: calc(100% - 380px);
          }
        }
        .head_user {
          margin-top: 10px;
        }
      }
    }
  }
  .menu_callaped {
    .sh_sticky {
      .head_logo {
        width: 108px;
        transition: 0.5s;
      }
    }
    .sh_control {
      .page-menu {
        .page-menu-inner {
          width: 80px;
          transition: 0.5s;
        }
      }
    }
  }
}

@media (max-width: 1024px) {
  .sh_control {
    .sh_sticky {
      .head_logo {
        width: 330px;
        height: 80px;
      }
      .head_content {
        height: 60px;
        .icon_collaped{
          margin-top: 15px;
        }
        .sh_search {
          flex: 1;
          min-width: 1px;
          margin-top:15px;
          form {
            width: calc(100% - 50px);
            .sh_search_menu {
              position: relative;
              display: flex;
              input {
                height: 44px;
                padding: 0 30px 0 45px;
                border-radius: 3px;
                width: 100%;
                outline: 0;
                float: left;
                border: 1px solid rgba(230, 230, 230, 0.05);
                background: rgba(187, 187, 187, 0.3);
                font-size: 14px;
                outline: 0;
                margin-bottom: 0;
                box-shadow: none;
                color: var(--white);
              }
              input.form-control {
                width: 100%;
                background-clip: padding-box;
                // border: 1px solid #ced4da;
              }
              ::placeholder {
                color: var(--white);
                opacity: 1; /* Firefox */
              }

              :-ms-input-placeholder {
                color: var(--white);
              }

              ::-ms-input-placeholder {
                color: var(--white);
              }
              i.s_icon {
                position: absolute;
                pointer-events: none;
                top: 50%;
                left: 17px;
                transform: translateY(-50%);
                color: var(--white);
              }
            }
          }
        }
        .head_user {
          margin-top: 10px;
        }
      }
    }
  }
  .menu_callaped {
    .sh_sticky {
      .head_logo {
        width: 85px;
        transition: 0.5s;
      }
    }
    .sh_control {
      .page-menu {
        .page-menu-inner {
          width: 80px;
          transition: 0.5s;
          .sh-link-wrapper {
            width: 80px;
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

@media (max-width: 689.95px) {
  .sh_control {
    .sh_sticky {
      .head_logo {
      }
      .head_content {
        height: 60px;
        .icon_collaped{
          margin-top: 15px;
        }
        .sh_search {
          flex: 1;
          min-width: 1px;
          margin-top:15px;
          form {
            width: calc(100% - 20px);
            .sh_search_menu {
              position: relative;
              display: flex;
              input {
                height: 44px;
                padding: 0 30px 0 45px;
                border-radius: 3px;
                width: 100%;
                outline: 0;
                float: left;
                border: 1px solid rgba(230, 230, 230, 0.05);
                background: rgba(187, 187, 187, 0.3);
                font-size: 14px;
                outline: 0;
                margin-bottom: 0;
                box-shadow: none;
                color: var(--white);
              }
              input.form-control {
                width: 100%;
                background-clip: padding-box;
                // border: 1px solid #ced4da;
              }
              ::placeholder {
                color: var(--white);
                opacity: 1; /* Firefox */
              }

              :-ms-input-placeholder {
                color: var(--white);
              }

              ::-ms-input-placeholder {
                color: var(--white);
              }
              i.s_icon {
                position: absolute;
                pointer-events: none;
                top: 50%;
                left: 17px;
                transform: translateY(-50%);
                color: var(--white);
              }
            }
          }
        }
        .head_user {
          margin-top: 10px;
        }
      }
    }
    .header_fixed {
      background: var(--white);
      .head_content {
        .icon_collaped {
          i {
            font-size: 2.2em;
            font-weight: lighter;
            color: var(--gray);
            transition: 0.3s;
            padding: 0 15px;
            display: inline-block;
          }
        }
        .sh_search {
          form {
            .sh_search_menu {
              input.form-control {
                border: 1px solid rgba(230, 230, 230, 0.05);
                background: rgba(187, 187, 187, 0.3);
                color: var(--gray);
              }
              ::placeholder {
                color: var(--gray);
                opacity: 1; /* Firefox */
              }

              :-ms-input-placeholder {
                color: var(--gray);
              }

              ::-ms-input-placeholder {
                color: var(--gray);
              }
              i.s_icon {
                position: absolute;
                pointer-events: none;
                top: 50%;
                left: 17px;
                transform: translateY(-50%);
                color: var(--gray);
              }
            }
          }
        }
      }
    }
  }
}

</style>
