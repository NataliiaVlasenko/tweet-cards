"use strict";(self.webpackChunktweet_cards=self.webpackChunktweet_cards||[]).push([[574],{574:function(n,t,e){e.r(t),e.d(t,{default:function(){return z}});var r=e(439),o=e(791),a=e(165),i=e(861),s=e(924),l=e(596),p="https://63f9ba5dbeec322c57e6d42a.mockapi.io";function c(){return(c=(0,i.Z)((0,a.Z)().mark((function n(){var t,e;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.get("".concat(p,"/users"));case 3:return t=n.sent,e=t.data,n.abrupt("return",e);case 8:n.prev=8,n.t0=n.catch(0),404===n.t0.response.status?l.Am.info("There is no such user's collection!"):500===n.t0.response.status?l.Am.error("Oops! Server error! Please try later!"):l.Am.error("Something went wrong! Please reload the page!");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function d(n,t){return x.apply(this,arguments)}function x(){return(x=(0,i.Z)((0,a.Z)().mark((function n(t,e){var r,o;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.put("".concat(p,"/users/").concat(t),e);case 3:return r=n.sent,o=r.data,n.abrupt("return",o);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function u(n){return f.apply(this,arguments)}function f(){return(f=(0,i.Z)((0,a.Z)().mark((function n(t){var e,r;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.get("".concat(p,"/users/?following=").concat(t));case 3:return e=n.sent,r=e.data,n.abrupt("return",r.filter((function(n){return null!=n.following})));case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}var g,h,A,b,m,w,j,Z,S,Y,N,y,k,J,E=e(773),v=e(168),P=e(444),F=P.ZP.li(g||(g=(0,v.Z)(['\n  background: linear-gradient(\n    114.99deg,\n    #471ca9 -0.99%,\n    #5736a3 54.28%,\n    #4b2a99 78.99%\n  );\n  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);\n  border-radius: 20px;\n\n  width: 380px;\n  position: relative;\n  font-family: "Montserrat", sans-serif;\n']))),G=P.ZP.img(h||(h=(0,v.Z)(["\n  position: absolute;\n  top: 20px;\n  left: 20px;\n"]))),I=P.ZP.div(A||(A=(0,v.Z)(["\n  padding: 28px 36px 18px 36px;\n"]))),K=P.ZP.div(b||(b=(0,v.Z)(['\n  display: block;\n  content: " ";\n  height: 7px;\n  width: 380px;\n  position: relative;\n\n  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),\n    inset 0px -2.19582px 4.39163px #ae7be3,\n    inset 0px 4.39163px 3.29372px #fbf8ff;\n  background-color: #ebd8ff;\n\n  & > img {\n    position: absolute;\n    bottom: -27px;\n    left: 159px;\n    z-index: 100;\n\n    border-radius: 100%;\n  }\n\n  &::after {\n    width: 80px;\n    height: 80px;\n    content: " ";\n    display: block;\n\n    background: #ebd8ff;\n    box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),\n      inset 0px -2.19582px 4.39163px #ae7be3,\n      inset 0px 4.39163px 3.29372px #fbf8ff;\n    border-radius: 100%;\n\n    position: absolute;\n    left: 150px;\n    bottom: -36px;\n  }\n']))),O=P.ZP.div(m||(m=(0,v.Z)(['\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n\n  margin-top: 62px;\n  margin-bottom: 26px;\n\n  font-family: "Montserrat", sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 24px;\n  text-transform: uppercase;\n\n  color: #ebd8ff;\n']))),L=P.ZP.div(w||(w=(0,v.Z)(["\n  display: flex;\n  justify-content: center;\n  padding-bottom: 36px;\n"]))),U=P.ZP.button(j||(j=(0,v.Z)(['\n  width: 196px;\n  height: 50px;\n\n  background: #ebd8ff;\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n  border-radius: 10.3108px;\n\n  font-family: inherit;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 22px;\n  text-transform: uppercase;\n  color: #373737;\n\n  &[data-active="true"] {\n    background-color: #5cd3a8;\n  }\n  }\n']))),Q=e(184),R=function(n){var t=n.props,e=(0,o.useState)(t.followers),a=(0,r.Z)(e,2),i=a[0],s=a[1],l=(0,o.useState)(t.following),p=(0,r.Z)(l,2),c=p[0],x=p[1];return(0,Q.jsxs)(F,{children:[(0,Q.jsx)(G,{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAWCAYAAABqgnq6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJvSURBVHgB7VixTgJBEJ0zaoIFjSZSaKGFBY0WNlpYaOs3m2ihjYWNFhRaQIGJFFBIIpfgPG6WDOseuyLCmPiSye0dc3u772beDJcNh8NLWj76bNdZluVlDrzOQz7s0pKxQjZQYTuiPwArhAE1jqIDMg5LhAEHTNo2GYY1woAjJq1CRmGRsDW2UyZtlQwidVEDthe2DhUVrSKGqrUZ8O+ytcQ/F98dSq9yrgjc02xosz3JeE8MuKNi/dOeezLl9yTC3vEgLvl97xrQEqHWYt1g30Zgjg77NmRBGxTHqAgE5kpBzveN1shzDNT1vrseAvsOKYJYSk6QhTRhq3oaU1Xjpt6g+I/JkXnwlgeUBhSBefZeWPum2DhY3DUKZ8sEYhHWUWSBpDMqNAbnz1SkW035a7L2+VCXMea4xVwwPkd6p7YQdfZ/o/ngWI2v2HLZ10nqBLEIa6kxNAVkgZQHth4VEYgxIqbrkVtX9/qNaYfSMSoCclw6YhGmdculIaJuYsOiY/pvTUij9LVSHSkBtMVE1YxFmNYqR14FuhQo+1rLEH2+TmmSUkTfAfPEqtvCECNMiyBSD5tGap3TV4FcE+GEuGOTj+o3l7oOO5SOR69CLxWxMN9jEppOrPn8SqreR8mXBaQmogGkoeVAP7SuS7noW43SgBalRYYQizDXdY9TE5vXZIl+uRRDeT506Qq/AFmpAt6esQf7VaQIKTZ5gUijooPO5b4tKlLL3zz6pi1pO3rqOWX+Ifgp/F3gxbmqXC3xQbvi9pKMzMgHRA3o342vW/8fEMvxYEnkfVgjDCL/SoZhiTCTIu/DCmE/FfmF4RNQ/w47l8bQTgAAAABJRU5ErkJggg==",alt:"logo"}),(0,Q.jsx)(I,{children:(0,Q.jsx)("img",{src:E,alt:"messageImg"})}),(0,Q.jsx)(K,{children:(0,Q.jsx)("img",{src:t.avatar||"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABYJSURBVHgB5VxpjF3leX6+s9xz95k7i+3x2J5xBgdjbGySGFDSNIOiNKmQiHEWo4S1UiWqqoVI/dFWjYAfrZqqKlC1/VGpBUGiAGmK3ZJUSZQwhAQbzGKIHQiJ7Wtszz6euXfueravz/edGWMbGzPje8Ysj3V9lzl3Oc951+f9zhG4iNi25cF2M2ENWqHsh4nNCEU/BG8asv+0jSVmpBBFIeUMDFmUUh4Jw3DI97Fv577bZ3CRILCEmCfMFOIzQmLb20haNESRezLkS7krcP2hpSR0SQj88iceHDQN605a0SC/sR1xQ4iHFJnff/7mnYgZsRGorC2RsO6kpd21JKSdFaIYyvBe0wuGHt13exExoOUEvjeIOxOiKCEfevz5m+9Fi9FSAm/c+vBtUhh3ty62tRqRRX5v7y0PoUVoCYE3bnmwX9rWg/y0Qbw/sFO4/jda4dYGLhA7tj5yJ8l7+X1EnsI2mbBe/go9BheIRVuginWObd7NjHcX3s+Q4v7H9t70DSwSiyJQuWyYsJ8QkFvwAYCE2Ge43g2LcekFE6jjXcJ+6r2bKBYLdjmud+1CSVwQgR9c8uaxcBLfNYEffPLmsTAS3xWBHx7y5vHuSXxXZYxKGB8e8hSkTpKq0jjfluclcMfWh+/7oGTbhUDts2Pbd59vO/Od/qhaM9Z5f48PKwSu2bjqhtKB40/sOfcm58Bce/bye0cQuGiYYdt35bni4TldmK3OfReTPNsKkE424SR8OoHERUS77vPPgbNaYKSqiHO+KQ6kEh4u7z+CFfljyNijjC0VNJse1DH2hYVyo4AGVmCyvAInSnmE0kStmUHTTWApEEp5+9lUnLMSuOOqbx9eqqybTAS4Zv0buGLVAfjNadRrFQQByfFCyAAIQvXjQwSklJoerDDgaz5mqy680MSsGMDByetQb2YRL0Sx6XpXnjkueFsS+epV37mbGWgblgCFXB03XfsU+tpeJ1kVHjMTfijQIHk+STKECdOyYTLQmGETbqMOP/D5ow00PR9ew0XYHOXnHMGsvxG+byFGtJsmmgeO7xw69cXTLHApC+Y/2PwCNg6MwzFOIPAC1Koeb1VaV6DsDIK/1vdJpNeA2+RrDIMN3oeGCdu2SKSkpYao1FxUm9yu7Xq8dvhKxIyZpuuvPdUKTz9ktjkYN3nbP/0Kdv96LVZ2jgHVEYQpB8JKwLRDZLJpuitdlrNK3/dgGHRjw0C2PQ07kUE268AUgdoAXrOJQG0nsjg8UkLnqhmMnvAxXYrXChMJQ8l398y/cJoLX77qS0+ojRAjVuQnsO2aPUhlLJRmXQa5BurVEiRJUewZhmIwhEvrMxNZtHV2I59JwoYLUzY1eb7n0uVD7T9OMoHenjY48gQGBgSmShLlSg5xQUBsYV34rfnnJwn86scf2SYM3IEYkUlWsTKzG2mjBDusIt+WgZ1KwkcCk6UQTV8gkAmEVpLEtcMxSaZXI1kkjolE8haSZOXO3BG+NwXH5jFwGyhPl2HZBoLyL0l8GtPV5YgJyU091z+9f3hXUT05ae/CEl/UvywmZJ0afu8jT6BWOYY3x9NodzxkMxVoKuimHRmbSYMmJZg8DB9BvYHIn7mJIfia+hRDxz07wW2ZWaT00WwwftZd/bpXGkP7sjVIzjzDuNiNsZkexAGpZtzAUPSLEMnz/DW3IUZs6HkO1dIRbTnKqnpWdcJDkjvKrNt0mWEbrPuadE8PYRCcdFEolxbK8qCPr+0wwRjKkz00qk2WPSoWBto6R4bHURo/yvImxEDHs4gRg/NCgyYwYVqDiBHt6TK6rOfZVRi0pIBliocDvx5GZ0cKA2s70bmsG7lCAQ5d0rIT3IaOoVjSFmmoQ64fhqoGVCWOKmHcgIYZbaMysgcHZZLZrJwg+T4tfgzLWJTHtUvznGkCtfvGiI90/opfwh02Le6cB4tkpHrWIbFhO8pmLw2Nbmm6LKoZYGzGNvJnWSSNLiyk0FYbMKnQyJidVQamlaa6YPd/El7nJpY1NpZ3JtDWnoeacISBKsJdfLRrL+ICj+mguo9ioIx3JJkxDyFhWahWXN4zjrGDWP/p65gEMhArrsCJqR6E5eMwvElYfg3CrdAKhbY6GXo6FFrJHKxsB6zcCuRXDCDdvYp/F8g3mjj4dAkFawLr+trxyv4qwPdbiRyWt40yydAqPQetBuO1Mrq7rMiX46v9DMavQnqcFmXDsVxYzAad669CKteu41au0AEnnaLV0BLpkjrssYgOaKkq6Jl8bDkpbb2aVBbSBj9D6Kwi6PZprPjY5zDx0g+wuqOOfC5JN/dolYp9D13ZSRyf7kXrIfsVdxYRq1iaSrhI2RK+SgA2uwjLxKpNV0OlV9XbqmTguR6Kx8YxOjmNAt3w41dcioSR1hY2j4gwYHx8ionHw+reHiRVDUMSO5evwPTqrWjMvopL1no4fGhcW7rF78s6JW4TB4FR7qBBhIMtWKBwTiirS6dMlGoSCcdApmMFnGxe13O+28SRY8P45//8LwyPTKLh0kJpcf/2j3+DNat6tDXOF1aKy6OHDuNPv/lPOhwkbAefvfaT+PpXrkOKRPb09WN6lBm6+rSuBxPqYJkCGcdDXBCW7FcxsB8xQtIts3SrcrVBSzSR6+jRbCj3DZgtd/7fz3GweByXfbQPa1etREdnAb0ruk5aX/S/1I+6e3rwqauvxNj4JF5/o4j//p8fUXQIccctX0Iml2dXsg4vvPocD4Jgh8DEZEThIEZsthh3+hCjXukFtJaExR5WSVcWkrkOkic1gYqkr3/5C/j84NVY95E1sJNJHStNUx3XKIloslU2Vpk7k8Ff3vXHOja+efQYfvjTZ3HdZz958rssZuO2rm7IZhFJWr1lKXWn9QnkJELRb/G3tMe5TLXWcFCvR0HfZh1op7OaAEWi7kDa21gPtjMxmPoWWafUpY3UJYyCnPPluV/KbdasWY07btuB0/ycyBa60JywedBsWqKB2UYKsUGQQCFlP0R8FIYkYabK5l5UdRdhJpJ6pzVJ/F7tYiRAkafrZv0f9GtCFX6Yo00VzUbUA7+1A9CJ6FQSnQy/yzFJoKE/u9KIT1hQUCV+7HOPN0Z6tdXYrKBNO8qc+p8ikMSoUkVZY6g7Dj5Xr7PrEL7LmrABQfVFkWlEoZCdRxCRpgk3ThM1E+k0HBJoO4ItXYr9cBvig+yPL/3OQZE0LS9nB0Hph6WFwRinrUw1tryFrNkq0yfwL99+El/7s3tw+Ch1QiYXwQxtVCswK2UYtVmSqBSZAN9/8qe46c57sful10iqjKz0FBdWXYnNLG2bNtXPFYgbsRK4bn0S9/xdF+74iwE9BFLKinZVQO88TQkuSRodGceTP34KIxPj2PPCy6pfg2jWYDSqMEmcaLA7aTb069/735/gyJtv4pndeyH9AJHKEM7dqxbQ0oW2en7pVevw1/cUsGlLGnEhNvm20GHiq9tZJI+9hpLqLMw0O4Q6BOs3HcdIhiQpFt0xy7Glp9yVnUZ3e46u69ECKbbW6/o11X1Ai6gcdaYTugRfXmDfyxmJ5GdLZdEqlqowaUQu3aTokBYp5I0p7PhyCkcOGSiXQ7Qalj5JJYZWrq+PRjBdRHN0BJVShUZioErtrmCmtFoia1XIStTzducy+Ic/+RoCEvWpq9kYqfinypxaXddzIXtm9R7l2n/753+EVw78Bp++4jKOBGajCpthASyBJJWcqGQUqHspJIojnLP8FssuXY9Nmzvxy2daTuBMbBaYTfssnG3kKVWlWNc1mmUcPD6MNZx/hHWqzLSugEMkQZdTieXj/b0wc1lan685YbTUBJtMPIFhI8zR9anIrKTlrdx6BSStDxxtKrGVfhvd83vEXEBMFTagvdAGm9YdMEy0UYhoOSSKtHdZRAyosXWzsjkk2CFYrMk6C92YOOHq2i5UdaASTvXNj2KZuvGximfMwdRc6xRgy/CUi5JwPSRWf1NCa6AydDAX+6R+rgfI/NwG1ZnZumAI6dCqdYb3djaDaj2WbmGGhXR4RMSQS0bHGPdobYLdgEW1hcIVVm/4GONV1N6FtBqf7mlw51VMM5yEtiTJWXDIDAoW3LUMFZt6SO1wJYSTiVx1rq2TKmlQwVYHQyh5X4mIjH+S0zs3fxm7GidSbhx2IqkshodjINCQRUuEYh/5uxUtxsiIxAyDdmZlG5IrSNHMNK5Zt0GPOEK1o2zLpCKALibTGYSs39jMsg4h6XRpw+lCx9aOqNxR2ysx1oiIC226OdVrjvNotR5kko8peYW63cuj/xOD/FtZv89I5zj9C6jQtF5UUGeMGnSpImKA2u/dzwlUGOvs5WvQtn4LfC1JyahdU4SQxCDXxlsOIZNAQHLGqLhUp6b0XNin9QZ0/4AW5jJjzx55E8ef2aNjJ6tlSKo6lKGZQFKaLN3x8bNFwoG9rA9mVy+9wMbzL3AM4LfeAo0wHLLcwB9yzHhyyfN7E+hbPYm+tTVNqFrjkuZOq11R1qKG5oEQerYakjxbu7CD/b86yvLmIKd2Kd1ZGGz/nDbGMrsL3Zcxpqbm+ltdukThR7myXkPjqQweoM75sepuJsaaePpnPuJAw8c+3QXFuZgo6fjYePlxrO1v0FDymJntwubNnMTR/Vy6sDIbhyTZcyqMzaQQztY5I6bbsnwx6dJamvLZmYTcniWPSKdOEjcvTKgDoOSxH/2gjPXrWS51pHHooIGf/FigWo2j15fFx56/Ze3cTCTYxcN1J2JAo2nhhZf6eHvrtXyuieXLw5M7bTGOqX7YUM9JjJlPI8VRp/DZwrksFJggBIUIaVPJoUtLGa1ekNGobk5bDPDyiyF2P5vhDfFDGEPqTh9GFrlDWEI8+aTNObDLkqNBS6yjMjsbzYQZ99TiokDxwiwqWRdKliAylUTILC2tqOuQc+6qimt1AAK+b2rCw9DPlm4hpvTlLnWvCVRxEOpaBEuEUsnAU0MZNFStx2JZETg7M6PJ9GiNagmbWqOliAxMVUizdlTEnUKeGr5H5PmolD08/l2B0hJeOUFzhrm1Ma+P7mpcvnr7Nfy967FEmJhIoFanQp3k0EeSOPa+yqWjTiKKa7pClPKklirnXtckBr4esE9PNfHYd22MjcUuLL0FIR76/ou3PqYenky/RoAHKMctycLKefzuYIEFbhqbNh3Fsq4J7cbKInP5HBMOM3Aiods8lVyUOCr0SgSpJX5leS+9aOIXv0jxfXFq6m/HvPsqnPbNO7Y+PL0UAuuZ+Oa3LoVfK+LI/t1sw5paUXFY5zmMgzazsGVbc5K/odWZJInt6d+A195I4T/+tYilRZR955+dZveMMQ/gIuDY4SLynMZtoGoy0J5BTyaBNg7Gk6znHA7HndCjNOUjLwJ0U6rvWb4aJgkdOz6OpQaN/95Tn59WQbuuf79jm3cutRU++1QDjnEAqbYc0us2I6t0QxbCtmlo91W1oMG+2kqkOVNJMdnUMD05ij2/XFrXVdZnmsHQqa+cNjTVyWTV9hR/1iCWEL//uQ709oQYLhYxQ3lfldehxTLGTrELycDgvaDAIINoGC9Z6tipNGp+GoffqGOpwAT3wKPP3XbatWjeNnVe1339Pg6mb+TmS2KFl27J4rptGR2NbdZ6al5iM1kYMpKp1Nq/plporlZl0aUDFXRUy8dbb38Sr+730ZiNp1U7HSr23XrDma9elBNtct0O1l/bjb7N7cy2Eh2lw8gnQt2NSD8qjhXMuRX5aeW6SnzgPyWBKTLrnJMc8zIopXpRn/ExcaiG3/xsFJWJJuLAuU60Oeu6h/3DT+zbuGr7IGJa9mF1SfR/hgoME0Op2oBHggp+GTNjowhoZTnOdnPU8NLJtCa1wSRS4ZCpQtJqVJfVeNNMtWNo1EONKo00KZJlJUZfowA72/q5B7Hz8b23/NXZ/nBOGUYI/3YZmi+3OqEkcxZ6NrRjfLqGTFLoKdpsLcQlq5dhYPlKVBkDK+Uyptwp1n5CjydttTTEYNHNPjiVL+jR6EuTHmcsTYrYLKb9CjLZbvRs6sTw7AlKgS3U/tihCTM451U93jGN7bj64btY29yHFqBtTQprP9uJ7MoUpmZKqNRU29bU61cMtmZrCg4+35/QbqusLmFGs1296IDx0GficDm5a3I6N0F5/jsHOHAyqeTok24EHJKbz6TRxv65QXJ/+8MRzBRruFCcy3Xn8Y5Ll9R5shtXbi+o82ZxAWgfSKH/iwWKo74ulIdHJzBJElXnETJJUBVEieLaxo4QHU5Wu4VHoiq1Cq2sqm8Nl4RTNAhDFy8Oz+JoeW4mwsxc4+eUK1U9Fqm77KXp0t2b8mhOMsFwDrNoSDxA133H86XPu/Zr3bLr95im8QVawqLG/Im8id4v5FFlbTddrtH6ytrt6rUarYa1neosnEgkmBijkFo/zg4krU9bUCN4tcxDrWq11JTOr2L82H7snszq2tBR6gyiuZLPA+FRTFVuXaMo4bJP7rgkh/LrNQ6uFq7S8B37Ht978w3n2+68BKracNPq639EV962mNKm8xOcdxR8zkdmtdvWlYhK0cAQ0aKgjD5tIVonEyRyMEf2YWryKNUOKjX1CucZk6jWpjF94gjGx45gDN0YlV26yNaLkoSyOldP8iJVWmoyXbWexlQzkiQqxQYWBlk0jOAP9x/bdV59591f9uSaB/uZVJ7iW/qxAFhZA/albP571GJv1nF0O2telmJMW9aZR9I29OIrNSu5/pICkjO/xZvHDpFETxNh01KXdXWjjTOOn08V6L4hrU/oWOmSrBMVV++JXnM0N3cJm5zWcWrr/Y7P3IVYoCwKI7j20T0tvOzJPBZLogbrPTnAGNbr6zN/laUE9L20JdHdScsztF6Fga40PtXp6ZpPCQg2k4ml2jk+rrE8/PdXZ5lgop8d8DNOcLiurFctGVaTTiUihiSNIxW1xnyBWBh5Cgu/9NOFkKhAIln0QfYy2Od5z7qvI+cwe6Zgk0RVOG8fyKDL4Tx5fsEl/82yBtwzFuLAlK/PIVEyfqkWsD4M9fnE3jgJHOa2RxdDnMLCyVNY8AJiFRcYE3dJaQwuKrH4fNcs08MwZ7+jvFVMePVALxQP7VBbZRtlrNUZa26xpYpu0XF+ZpiyvxR6Pc0sM2y5GGpL819kWC2SvGlE59YtECphqJi3UPIULkjO2LH1kfv5CS0dRlkFiVzWwroee+6VyN3VJQAOTTKGltTZmdAxriVgqdLM+PfsHFrclX8vWA/SfTNw38UQYi8I+nrUxr2PPXfT/bgAtOYSoIyLobTui64N/T6AxJAw/dsX47JnIoaL0OLuRSeY2CGLSlF+z12E9kzceNUj9zBz3vqeIVIJAhxXNNL+/YuNdedCbJq4cmsOdQcvqkXGSNw8lmSooK7HwIJpG7+s5cvo3gaVHIQYEiEeePSFm4cQM5Z0KrNt8MH2xKw1GJEpP9M6yxTFUMhd1GeH3Jw/FJe1nfWbcRGhCE1WrC2hEQ7S1foUofrUs+jsqTPKorl1jHpJMm8BXlFrG5easDPx/wfmTl+AuFhNAAAAAElFTkSuQmCC",alt:"",width:62})}),(0,Q.jsxs)(O,{children:[(0,Q.jsxs)("div",{children:[t.tweets," tweets"]}),(0,Q.jsxs)("div",{children:[new Intl.NumberFormat("en-IN").format(i)," followers"," "]})]}),(0,Q.jsx)(L,{children:(0,Q.jsx)(U,{"data-active":c,onClick:function(){return n=t,void(c?(x(!1),s((function(n){return n-1})),d(n.id,{following:!1,followers:t.followers-1})):(x(!0),s((function(n){return n+1})),d(n.id,{following:!0,followers:t.followers+1})));var n},children:c?"following":"follow"})})]})},T=e(135),q=e(87),B=P.ZP.div(Z||(Z=(0,v.Z)(['\n  margin-left: auto;\n  margin-right: auto;\n  padding: 0 15px;\n  padding-bottom: 50px;\n  font-family: "Montserrat", sans-serif;\n']))),C=P.ZP.div(S||(S=(0,v.Z)(["\n  display: flex;\n  gap: 30px;\n  align-items: center;\n  justify-content: space-between;\n  margin: 20px 0;\n"]))),W=(0,P.ZP)(q.rU)(Y||(Y=(0,v.Z)(["\n  background-color: #5736a3;\n  padding: 10px;\n  border-radius: 10px;\n  color: #ebd8ff;\n  width: 76px;\n  height: 16px;\n\n  font-size: 18px;\n  text-decoration: none;\n  text-align: center;\n\n  &:hover {\n    color: #5cd3a8;\n  }\n"]))),V=P.ZP.label(N||(N=(0,v.Z)(["\n  font-size: 18px;\n\n  background-color: #5736a3;\n  padding: 10px;\n  border-radius: 10px;\n  color: #fff;\n  min-width: 106px;\n  height: 16px;\n\n  &:hover {\n    color: #5cd3a8;\n  }\n\n "]))),X=P.ZP.select(y||(y=(0,v.Z)(["\nposition: relative;\n  display: inline-block;\ncursor: pointer;\nmargin-left:10px;\nborder: none;\n"]))),M=P.ZP.ul(k||(k=(0,v.Z)(["\ndisplay: grid;\nwidth: calc(100vw - 3 * 48px);\ngrid-template-columns: repeat(3, 380px);\ngrid-gap: 48px;\nmargin: 0 auto 0 auto;\n\njustify-content: center;\npadding: 0;\nlist-style: none;\n\n"]))),H=P.ZP.button(J||(J=(0,v.Z)(["\ndisplay: block;\nwidth: 196px;\nheight: 50px;\nmargin: 20px auto;\n\nbackground:  #5CD3A8;\nbox-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\nborder-radius: 10.3108px;\n\nfont-family: inherit;\nfont-style: normal;\nfont-weight: 600;\nfont-size: 18px;\nline-height: 22px;\ntext-transform: uppercase;\ncolor: #373737;\n"]))),D=3,z=function(){var n=(0,o.useState)([]),t=(0,r.Z)(n,2),e=t[0],a=t[1],i=(0,o.useState)([]),s=(0,r.Z)(i,2),l=s[0],p=s[1],d=(0,o.useState)("all"),x=(0,r.Z)(d,2),f=x[0],g=x[1];(0,o.useEffect)((function(){!function(n){switch(n){case"follow":u(!1).then((function(n){return a(n)}));break;case"followings":u(!0).then((function(n){return a(n)}));break;case"all":(function(){return c.apply(this,arguments)})().then((function(n){return a(n)}))}}(f)}),[f]),(0,o.useEffect)((function(){p(e),e.length>0&&p(e.slice(0,D))}),[e]);return(0,Q.jsxs)(B,{children:[(0,Q.jsxs)(C,{children:[(0,Q.jsx)(W,{to:"/",children:(0,Q.jsx)(T._HU,{})}),(0,Q.jsxs)(V,{children:["Filter cards",(0,Q.jsxs)(X,{id:"follow",onChange:function(n){g(n.target.value.toString())},children:[(0,Q.jsx)("option",{value:"all",children:"show all"}),(0,Q.jsx)("option",{value:"follow",children:"follow"}),(0,Q.jsx)("option",{value:"followings",children:"followings"})]})]})]}),(0,Q.jsx)(M,{children:l.map((function(n){return(0,Q.jsx)(R,{props:n},n.id)}))}),D===l.length&&(0,Q.jsx)(H,{onClick:function(){l.length<e.length&&(D+=3,p(e.slice(0,D)))},children:"Load more"})]})}},773:function(n,t,e){n.exports=e.p+"static/media/messages.032662a2a907475127d7.png"}}]);
//# sourceMappingURL=574.b78b34aa.chunk.js.map