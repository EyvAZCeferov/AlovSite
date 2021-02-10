<template>
  <div>
    <!-- end page-transition -->
    <div class="search-box">
      <div class="inner">
        <form>
          <input
            type="search"
            v-bind:placeholder="
              this.$trans('static.components.header.search.typesearchkeyword')
            "
          />
          <input
            type="submit"
            v-bind:value="this.$trans('static.form.buttons.search')"
          />
        </form>
      </div>
    </div>
    <!-- end search-box -->

    <aside class="side-widget">
      <div class="inner">
        <div class="logo">
          <router-link :to="{ name: 'index' }">
            <a><img src="/temp/images/logo.png" alt="Image"/></a>
          </router-link>
        </div>
        <!-- end logo -->
        <div class="hide-mobile">
          <p>
            Extremity direction existence as dashwoods do up. Securing
            <u>marianne led</u> welcomed offended but offering six raptures.
          </p>
          <figure class="gallery">
            <img src="/temp/images/slide02.jpg" alt="Image" /><img
              src="/temp/images/slide03.jpg"
              alt="Image"
            />
          </figure>

          <h6 class="widget-title">ADDRESS</h6>
          <address class="address">
            <p>
              228 Cardigan Road, Leeds<br />
              Geneva Switzerland
            </p>
            <p>+1 (850) 344 0 66 #20</p>
          </address>
          <h6 class="widget-title">FOLLOW US</h6>
          <ul class="social-media">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
        <!-- end hide-mobile -->
        <div class="show-mobile">
          <div class="languages">
            <ul v-if="$lang.getLocale() == 'az'">
              <li>
                <a href="#" v-on:click="$lang.setLocale('en')"> en</a>
              </li>
              <li>
                <a href="#" v-on:click="$lang.setLocale('ru')">ru</a>
              </li>
            </ul>
            <ul v-else-if="$lang.getLocale() == 'ru'">
              <li>
                <a href="#" v-on:click="$lang.setLocale('en')">en</a>
              </li>
              <li>
                <a href="#" v-on:click="$lang.setLocale('az')">az</a>
              </li>
            </ul>
            <ul v-else-if="$lang.getLocale() == 'en'">
              <li>
                <a href="#" v-on:click="$lang.setLocale('az')">az</a>
              </li>
              <li>
                <a href="#" v-on:click="$lang.setLocale('ru')">ru</a>
              </li>
            </ul>
          </div>
          <!-- end languages -->
          <div class="site-menu">
            <ul>
              <li>
                <a href="javascript:void(0)"> Alov </a
                ><i class="lni lni-chevron-down-circle"></i>
                <ul>
                  <li>
                    <router-link :to="{ name: 'about' }">
                      {{ this.$trans("static.components.header.menu.about") }}
                    </router-link>
                  </li>
                  <li>
                    <router-link :to="{ name: 'certifications' }">
                      {{
                        this.$trans(
                          "static.components.header.menu.certifications"
                        )
                      }}
                    </router-link>
                  </li>
                  <li>
                    <router-link :to="{ name: 'teams' }">
                      {{ this.$trans("static.components.header.menu.teams") }}
                    </router-link>
                  </li>
                </ul>
              </li>
              <li>
                <router-link :to="{ name: 'categories' }">
                  {{ this.$trans("static.components.header.menu.categories") }}
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'posts' }">
                  {{ this.$trans("static.components.header.menu.projects") }}
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'posts' }">
                  {{ this.$trans("static.components.header.menu.posts") }}
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'contactus' }">{{
                  this.$trans("static.components.header.menu.contactus")
                }}</router-link>
              </li>
            </ul>
          </div>
          <!-- end site-menu -->
        </div>
        <!-- end show-mobile -->
        <small>© 2020 Consto | Industrial Construction Company</small>
      </div>
      <!-- end inner -->
    </aside>
    <!-- end side-widget -->

    <nav class="navbar">
      <div class="container">
        <div class="logo">
          <router-link :to="{ name: 'index' }">
            <img src="/temp/images/logo.png" alt="Image" />
          </router-link>
        </div>
        <!-- end logo -->
        <div class="languages">
          <ul v-if="$lang.getLocale() == 'az'">
            <li>
              <a href="#" v-on:click="$lang.setLocale('en')"> en</a>
            </li>
            <li>
              <a href="#" v-on:click="$lang.setLocale('ru')">ru</a>
            </li>
          </ul>
          <ul v-else-if="$lang.getLocale() == 'ru'">
            <li>
              <a href="#" v-on:click="$lang.setLocale('en')">en</a>
            </li>
            <li>
              <a href="#" v-on:click="$lang.setLocale('az')">az</a>
            </li>
          </ul>
          <ul v-else-if="$lang.getLocale() == 'en'">
            <li>
              <a href="#" v-on:click="$lang.setLocale('az')">az</a>
            </li>
            <li>
              <a href="#" v-on:click="$lang.setLocale('ru')">ru</a>
            </li>
          </ul>
        </div>
        <!-- end languages -->
        <div class="site-menu">
          <ul>
            <li>
              <a href="javascript:void(0)"> Alov </a>
              <ul>
                <li>
                  <router-link :to="{ name: 'about' }">
                    {{ this.$trans("static.components.header.menu.about") }}
                  </router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'certifications' }">
                    {{
                      this.$trans(
                        "static.components.header.menu.certifications"
                      )
                    }}
                  </router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'teams' }">
                    {{ this.$trans("static.components.header.menu.teams") }}
                  </router-link>
                </li>
              </ul>
            </li>

            <li>
              <router-link :to="{ name: 'categories' }">
                {{ this.$trans("static.components.header.menu.categories") }}
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'projects' }">
                {{ this.$trans("static.components.header.menu.projects") }}
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'posts' }">
                {{ this.$trans("static.components.header.menu.posts") }}
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'contactus' }">{{
                this.$trans("static.components.header.menu.contactus")
              }}</router-link>
            </li>
          </ul>
        </div>
        <!-- end site-menu -->
        <div class="search"><i class="lni lni-search-alt"></i></div>
        <!-- end search -->

        <div class="hamburger">
          <div id="hamburger"><span></span> <span></span> <span></span></div>
          <div id="cross"><span></span> <span></span></div>
        </div>
        <!-- end hamburger -->
        <!-- end hamburher -->
        <a href="#" class="navbar-button" data-fancybox v-if="!user">
          <router-link :to="{ name: 'loginorregister' }">
            <i class="lni lni-user"></i>
            <span>{{
              this.$trans("static.components.header.menu.loginorregister")
            }}</span></router-link
          >
        </a>
        <a href="#" class="navbar-button" data-fancybox v-else-if="user">
          <router-link :to="{ name: 'profile' }">
            <i class="lni lni-user"></i>
            <span>{{
              this.$trans("static.components.header.menu.profile")
            }}</span></router-link
          >
        </a>

      </div>
      <!-- end container -->
    </nav>
    <!-- end navbar -->
  </div>
</template>

<script>
export default {
  name: "Header",
  props: [ "userinf" ],
  data: function() {
    return {
      user: null
    };
  },
  created: function() {
    this.user = this.userinf;
  }
};
</script>
