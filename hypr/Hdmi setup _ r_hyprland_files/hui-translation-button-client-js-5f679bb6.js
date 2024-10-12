import{x as t,q as e,I as a,i as n,_ as i,w as s,h as o,s as l,f as r,n as c,bX as h,bI as d,A as p}from"./icon-ada4cc58.js";import{S as u}from"./faceplate-switch-input-39a16472.js";import{W as m,d as k,f as v,b,_ as f,t as g,dk as C,de as x,dl as T,ey as w,ay as y,w as A,j as E,ez as S,eA as M,az as D,eB as $}from"./shell-9a3ad68e.js";import{l as V,L as O}from"./list-item-92483316.js";import{T as F,a as I}from"./faceplate-textarea-input-ced9fd8a.js";import{m as B,l as R,n as _,T as z,o as j,p as G}from"./translations-8f2d7cb9.js";import{t as N,a as L,b as U,c as q,d as P,e as Q,f as Y}from"./translation-ce054561.js";import"./checked-input-element-00610e5f.js";import"./faceplate-input-6aaf6007.js";import"./input-element-7c19d628.js";import"./form-common-utils-4dba185c.js";import"./constants-abdf2fa9.js";import"./live-f7f79f15.js";import"./text-input-8201e088.js";var W;!function(t){t.GREAT="great",t.NOT_GREAT="not great"}(W||(W={}));let X=class extends(m(l)){constructor(){super(...arguments),this.otherReasonFormValue="",this.isOpen=!1,this.handleDismiss=()=>{this.trackEvent(B()),this.close()}}show(){this.trackEvent(R()),this.faceplateDialog?.showModal?.(),this.isOpen=!0}close(){this.faceplateDialog?.close?.(),this.isOpen=!1,this.selectedOption=void 0,this.otherReasonFormValue=""}showThankYouAlert(){this.dispatchEvent(k("faceplate-alert",{level:v.success,message:"Thanks for rating"}))}handleUpvoteTranslation(){this.selectedOption=W.GREAT}handleDownvoteTranslation(){this.selectedOption=W.NOT_GREAT}handleSubmit(){this.selectedOption&&(this.trackEvent(_({reason:this.selectedOption,survey_text:this.otherReasonFormValue})),this.showThankYouAlert(),this.close())}render(){return t`\n <faceplate-dialog \n id="global-translation-feedback-faceplate-dialog" \n class="translation-feedback" \n>\n <div class="flex flex-col gap-lg">\n <div class="flex justify-between">\n <h3 class="font-bold text-24 text-neutral-content-strong m-0" data-testid="modal-title">\n Enjoying these translations?\n </h3>\n ${b({attributes:{onclick:this.handleDismiss},appearance:"secondary",leadingIcon:e({size:a.Medium}),size:f.Medium})}\n </div>\n <p class="m-0" data-testid="modal-subtitle">\n Tell us what you think about your translated Reddit experience.\n </p>\n <div class="flex justify-center gap-md">\n <button \n data-testid="upvote-translation" \n class="py-md px-lg cursor-pointer border-none rounded-md ${this.selectedOption===W.GREAT?"bg-neutral-background-selected":"bg-neutral-background-medium"}" \n @click="${this.handleUpvoteTranslation}" \n @keydown="${this.handleUpvoteTranslation}" \n>\n <img \n src="${CLIENT_CONFIG.STATIC_BASE_URL}assets/snoomojis/Snoo_Expression_Smile_EyesOpen.png" \n class="block m-auto pb-xs" \n width="56" \n height="56" \n alt="" \n>\n <p class="font-semibold text-14 text-center text-neutral-content-strong m-0">\n Great\n </p>\n </button>\n <button \n data-testid="downvote-translation" \n class="py-md px-lg cursor-pointer border-none rounded-md ${this.selectedOption===W.NOT_GREAT?"bg-neutral-background-selected":"bg-neutral-background-medium"}" \n @click="${this.handleDownvoteTranslation}" \n @keydown="${this.handleDownvoteTranslation}" \n>\n <img \n src="${CLIENT_CONFIG.STATIC_BASE_URL}assets/snoomojis/Snoo_Expression_Blanc.png" \n class="block m-auto pb-xs" \n width="56" \n height="56" \n alt="" \n>\n <p class="font-semibold text-14 text-center text-neutral-content-strong m-0">\n Not Great\n </p>\n </button>\n </div>\n ${this.selectedOption?t`\n <div class="flex w-full box-border">\n <faceplate-textarea-input \n data-testid="other-reason-input" \n maxlength="500" \n appearance="${F.BORDERED}" \n size="${I.EXPANDED}" \n @keyup="${t=>{t.stopPropagation(),this.otherReasonFormValue=t.target.value}}" \n class="w-full" \n .value="${this.otherReasonFormValue}" \n>\n <span slot="label" \n>Leave a comment (optional)</span>\n </faceplate-textarea-input>\n </div>\n `:t``}\n <div class="flex justify-end">\n ${b({appearance:"primary",size:f.Large,shape:"pill",attributes:{onclick:this.handleSubmit,className:"flex box-border","data-testid":"submit-feedback-button",disabled:!this.selectedOption},children:t`<span class="font-semibold text-14" \n>Give Feedback</span>`})}\n </div>\n </div>\n </faceplate-dialog>\n `}};X.styles=[n`.translation-feedback{border-radius:16px;max-width:400px;padding:2rem 1.5rem 1.5rem 1.5rem;width:82%}`,g],i([s("#global-translation-feedback-faceplate-dialog")],X.prototype,"faceplateDialog",void 0),i([o()],X.prototype,"selectedOption",void 0),i([o()],X.prototype,"otherReasonFormValue",void 0),i([o()],X.prototype,"isOpen",void 0),X=i([r("global-translation-feedback-modal")],X);const K="reddit-cookie-banner",H="xpromo-app-selector",J="xpromo-viral-community",Z="faceplate-bottom-sheet",tt='shreddit-async-loader[bundlename="desktop_rpl_nsfw_blocking_modal"], shreddit-async-loader[bundlename="nsfw_blocking_modal"]',et=m(l);function at(t){const e=t?.shadowRoot?.querySelector(Z);return!!e?.open}function nt(t){const e=document.querySelector(t);return e?w(at,e):[]}let it=class extends et{constructor(){super(...arguments),this.isDesktop=!1,this.withFeedback=!1,this.translationContextValue=x,this.withCoachmark=!1,this.hasCoachmarkDisplayLimit=!1,this.translationActiveMsg="Translations enabled",this.handleTranslationActiveSwitch=()=>{const t=!this.translationContextValue.isTranslationActive;this.dispatchContextUpdateEvent({isTranslationActive:t})},this.closeTranslationCoachmark=()=>{this.translationCoachmark?.close?.(),this.onCoachmarkClose()},this.openTranslationCoachmark=()=>{this.trackEvent(N(!!this.translationContextValue.isTranslationActive)),this.translationCoachmark?.show?.()},this.openTranslationMenu=()=>{this.trackEvent(L(!!this.translationContextValue.isTranslationActive)),this.isDesktop?this.translationDropdownMenu?.show?.():this.translationMenuBottomSheet?.showModal?.()},this.closeTranslationMenu=()=>{this.trackEvent(L(!!this.translationContextValue.isTranslationActive)),this.isDesktop?this.translationDropdownMenu?.close?.():this.translationMenuBottomSheet?.close?.()},this.openFeedbackModal=()=>{this.translationFeedbackModal?.show?.()},this.handleCoachmarkSettingsClick=()=>{this.closeTranslationCoachmark(),this.openTranslationMenu(),this.trackEvent(U(q.UpdateSettings))},this.handleTranslationActiveClick=t=>{t.stopPropagation(),this.trackEvent(P(!!this.translationContextValue.isTranslationActive))},this.handleTooltipClick=t=>{t.stopPropagation()},this.handleCoachmarkCloseClick=()=>{this.closeTranslationCoachmark(),this.trackEvent(U(q.Dismiss))},this.handleNavMobileButtonClick=()=>{this.openTranslationMenu(),this.trackEvent(Q(!!this.translationContextValue.isTranslationActive))},this.handleNavbarButtonClick=()=>{this.trackEvent(Q(!!this.translationContextValue.isTranslationActive)),this.trackEvent(L(!!this.translationContextValue.isTranslationActive))},this.handleGiveFeedbackButtonClick=()=>{this.openFeedbackModal(),this.closeTranslationMenu()},this.onCoachmarkClose=()=>{setTimeout((()=>{this.dispatchContextUpdateEvent({shouldDisplayCoachmark:!1,shouldDisplayFeedbackCoachmark:!0})}),500)}}updated(t){this.withCoachmark&&!this.hasCoachmarkDisplayLimit&&t.has("translationContextValue")&&void 0!==this.translationContextValue.isTranslationActive&&this.displayCoachmark()}displayCoachmark(){const{coachmarkDisplayCount:t,shouldDisplayCoachmark:e}=this.translationContextValue;window.setTimeout((()=>{if(!e)return;if(this.hasCoachmarkObstacles())return;const a=t<1;this.dispatchContextUpdateEvent({coachmarkDisplayCount:t+1,shouldDisplayCoachmark:a,shouldDisplayFeedbackCoachmark:!a}),a&&this.openTranslationCoachmark(),this.hasCoachmarkDisplayLimit=!0}),1500)}hasCoachmarkObstacles(){const t=!!document.querySelector(K),e=[...nt(H),...nt(J)],a=!!document.querySelector(tt);return t||e?.length>0||a}dispatchContextUpdateEvent(t){const e={...this.translationContextValue,...t},a=new CustomEvent("update-translation-context",{bubbles:!0,composed:!0,detail:e});this.dispatchEvent(a)}renderCoachmark(){return this.translationContextValue.shouldDisplayCoachmark?t`<div class="flex flex-col">\n <div class="flex flex-row flex-nowrap items-start">\n <div class="flex-shrink flex-grow-0 pt-xs pl-xs mr-xs">\n ${h({size:a.Small})}\n </div>\n <div class="flex flex-col flex-grow flex-shrink-0 pt-xs items-start">\n <h3 class="mt-0 text-14">${this.translationActiveMsg}</h3>\n <p class="mt-0 max-w-[10rem] xs:max-w-none">\n ${this.translationContextValue.isTranslationActive?"Posts and comments are automatically translated":"Automatically translate posts and comments"}\n </p>\n </div>\n <div class="flex-shrink flex-grow-0">\n ${b({size:f.Medium,appearance:"plainInverted",shape:"pill",leadingIcon:e({size:a.Small}),attributes:{"aria-label":"Close",id:"coachmark-close-button",onclick:this.handleCoachmarkCloseClick}})}\n </div>\n </div>\n <div class="flex flex-nowrap gap-xs justify-end">\n ${b({children:"Settings",size:f.Medium,appearance:"plainInverted",shape:"pill",attributes:{id:"coachmark-settings-button",onclick:this.handleCoachmarkSettingsClick}})}\n </div>\n </div>`:t``}renderDesktopMenu(){return t`<faceplate-dropdown-menu position="bottom-end" id="translation-desktop-menu">\n ${b({size:f.Medium,appearance:"plain",shape:"pill",leadingIcon:d({size:a.Medium}),attributes:{id:"translation-menu-button","aria-label":this.translationActiveMsg,onclick:this.handleNavbarButtonClick}})}\n <faceplate-menu slot="menu" dropdown hidden>\n ${V({label:t`\n <faceplate-switch-input \n id="hui-translation-switch" \n appearance="${u.PRIMARY}" \n class="inline-flex flex-row-reverse gap-sm" \n ?checked="${this.translationContextValue.isTranslationActive}" \n @input="${this.handleTranslationActiveSwitch}" \n @click="${this.handleTranslationActiveClick}" \n>\n <span class="-ml-xs">${this.translationActiveMsg}</span>\n </faceplate-switch-input>\n `,size:O.Medium})}\n ${this.withFeedback?V({label:"Give translation feedback",attributes:{"data-testid":"hui-translation-button-feedback-option"},size:O.Medium,onClick:this.handleGiveFeedbackButtonClick}):p}\n </faceplate-menu>\n </faceplate-dropdown-menu>`}renderMobileMenu(){return t`<div>\n ${b({size:f.Medium,appearance:"plain",shape:"pill",leadingIcon:d({size:a.Medium}),attributes:{id:"translation-menu-button",onclick:this.handleNavMobileButtonClick,"aria-label":this.translationActiveMsg}})}\n <faceplate-bottom-sheet id="translation-mobile-menu">\n <div class="p-md flex flex-col items-stretch w-full gap-md">\n <faceplate-switch-input \n id="hui-translation-switch" \n appearance="${u.PRIMARY}" \n class="flex flex-row-reverse justify-between gap-sm px-xs" \n ?checked="${this.translationContextValue.isTranslationActive}" \n @input="${this.handleTranslationActiveSwitch}" \n @click="${this.handleTranslationActiveClick}" \n>\n <span class="inline-flex items-center gap-xs">\n ${d({size:a.Medium})}\n <span> ${this.translationActiveMsg} </span>\n </span>\n </faceplate-switch-input>\n ${this.withFeedback?V({label:"Give translation feedback",attributes:{"data-testid":"hui-translation-button-feedback-option"},size:O.Medium,onClick:this.handleGiveFeedbackButtonClick}):p}\n </div>\n </faceplate-bottom-sheet>\n </div>`}render(){return t`\n <faceplate-tooltip \n position="${this.isDesktop?"bottom-end":"bottom"}" \n appearance="inverted" \n id="translation-coachmark-tooltip" \n trigger-event="none" \n @click="${this.handleTooltipClick}" \n>\n <div slot="trigger">\n ${this.isDesktop?this.renderDesktopMenu():this.renderMobileMenu()}\n </div>\n ${this.renderCoachmark()}\n </faceplate-tooltip>\n ${this.withFeedback?t` <global-translation-feedback-modal \n id="hui-translation-button-feedback-modal" \n></global-translation-feedback-modal>`:p}\n `}};it.styles=[g],i([c({type:Boolean,attribute:"is-desktop"})],it.prototype,"isDesktop",void 0),i([c({type:Boolean,attribute:"with-feedback"})],it.prototype,"withFeedback",void 0),i([C({context:T,subscribe:!0}),o()],it.prototype,"translationContextValue",void 0),i([c({type:Boolean,attribute:"with-coachmark"})],it.prototype,"withCoachmark",void 0),i([o()],it.prototype,"hasCoachmarkDisplayLimit",void 0),i([s("#translation-coachmark-tooltip")],it.prototype,"translationCoachmark",void 0),i([s("#translation-desktop-menu")],it.prototype,"translationDropdownMenu",void 0),i([s("#translation-mobile-menu")],it.prototype,"translationMenuBottomSheet",void 0),i([s("#hui-translation-button-feedback-modal")],it.prototype,"translationFeedbackModal",void 0),it=i([r("hui-translation-button")],it);let st=class extends(m(l)){constructor(){super(...arguments),this.translationContextValue=x,this.isNewAccountAge=!1,this.isRegularSEOVisit=!1,this.isMTSEOVisit=!1,this.withBackendSetting=!1,this.requestClientGQL=y}connectedCallback(){super.connectedCallback(),this.isSettingInitialized()?this.syncTranslationSettingsWithCookie():this.initializeTranslationSettings()}updated(t){if(!t.has("translationContextValue")||!this.withBackendSetting)return;const e=t.get("translationContextValue"),a=this.translationContextValue.isTranslationActive,n=e?.isTranslationActive;if(void 0===n)return;(!0!==n&&!0===a||!1!==n&&!1===a)&&this.saveTranslationSettingInAccount(a)}async initializeTranslationSettings(){const t=this.fetchTranslationSettingFromCookie(),e=await this.fetchTranslationSettingFromGQL();let a,n={...this.translationContextValue};if(t&&(n={...n,...t}),null!==e&&e!==t?.isTranslationActive&&(n={...n,isTranslationActive:e},a=z.BACKEND),null===t&&null===e){let t=!1;a=z.DEFAULT_OFF,this.isMTSEOVisit?(a=z.MT_SEO,t=!0):this.isRegularSEOVisit?a=z.REGULAR_SEO:this.isNewAccountAge&&(a=z.ACCOUNT_AGE,t=!0),n={...n,isTranslationActive:t}}this.dispatchContextUpdateEvent(n),null===e&&void 0!==n.isTranslationActive&&this.saveTranslationSettingInAccount(n.isTranslationActive),a&&(n.isTranslationActive?this.trackEvent(j(a)):this.trackEvent(G(a))),sessionStorage.setItem(A.TranslationInitialized,Date.now().toString()),this.trackEvent(Y(!!n.isTranslationActive))}syncTranslationSettingsWithCookie(){const t=this.fetchTranslationSettingFromCookie();let e={...this.translationContextValue};t&&t.isTranslationActive!==e.isTranslationActive&&(e={...e,...t},this.dispatchContextUpdateEvent(e)),this.trackEvent(Y(!!e.isTranslationActive))}fetchTranslationSettingFromCookie(){const t=E.get(S)??"";return M(t)}async fetchTranslationSettingFromGQL(){if(!this.withBackendSetting)return null;try{const{data:t}=await this.requestClientGQL({operation:D.IdentityImmersiveTranslationSetting}),e=t.identity?.preferences?.isMachineTranslationImmersive;return null==e||e===$.Unset?null:e===$.Enabled}catch{}return null}async saveTranslationSettingInAccount(t){if(!this.withBackendSetting)return null;try{await this.requestClientGQL({operation:D.UpdateAccountPreferences,variables:{input:{isMachineTranslationImmersive:t?$.Enabled:$.Disabled}}})}catch{}return null}dispatchContextUpdateEvent(t){const e=new CustomEvent("update-translation-context",{bubbles:!0,composed:!0,detail:t});this.dispatchEvent(e)}isSettingInitialized(){const t=sessionStorage.getItem(A.TranslationInitialized);return!!(t&&Date.now()-parseInt(t,10)<36e5)}render(){return t`<div>\n <slot></slot>\n </div>`}};i([C({context:T,subscribe:!0}),o()],st.prototype,"translationContextValue",void 0),i([c({type:Boolean,attribute:"is-new-account-age"})],st.prototype,"isNewAccountAge",void 0),i([c({type:Boolean,attribute:"is-regular-seo-visit"})],st.prototype,"isRegularSEOVisit",void 0),i([c({type:Boolean,attribute:"is-mt-seo-visit"})],st.prototype,"isMTSEOVisit",void 0),i([c({type:Boolean,attribute:"with-backend-setting"})],st.prototype,"withBackendSetting",void 0),st=i([r("translation-settings-admin")],st);
//# sourceMappingURL=hui-translation-button-client-js-5f679bb6.js.map
