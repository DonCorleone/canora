import { NgModule } from '@angular/core';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AiNoiseCancellingAppLandingComponent } from './ai-noise-cancelling-app-landing/ai-noise-cancelling-app-landing.component';
import { AiChatbotLandingComponent } from './ai-chatbot-landing/ai-chatbot-landing.component';
import { AiWriterCopywritingLandingComponent } from './ai-writer-copywriting-landing/ai-writer-copywriting-landing.component';
import { AiProfilePictureMakerLandingComponent } from './ai-profile-picture-maker-landing/ai-profile-picture-maker-landing.component';
import { AiDigitalMarketingLandingComponent } from './ai-digital-marketing-landing/ai-digital-marketing-landing.component';
import { AncalBannerComponent } from './ai-noise-cancelling-app-landing/ancal-banner/ancal-banner.component';
import { AncalFeaturesComponent } from './ai-noise-cancelling-app-landing/ancal-features/ancal-features.component';
import { AncalBrandsComponent } from './ai-noise-cancelling-app-landing/ancal-brands/ancal-brands.component';
import { AncalDownloadComponent } from './ai-noise-cancelling-app-landing/ancal-download/ancal-download.component';
import { AncalWhatWeDoComponent } from './ai-noise-cancelling-app-landing/ancal-what-we-do/ancal-what-we-do.component';
import { AncalSupportedComponent } from './ai-noise-cancelling-app-landing/ancal-supported/ancal-supported.component';
import { AncalTestimonialsComponent } from './ai-noise-cancelling-app-landing/ancal-testimonials/ancal-testimonials.component';
import { AncalCtaComponent } from './ai-noise-cancelling-app-landing/ancal-cta/ancal-cta.component';
import { AncalFaqComponent } from './ai-noise-cancelling-app-landing/ancal-faq/ancal-faq.component';
import { AncalBlogComponent } from './ai-noise-cancelling-app-landing/ancal-blog/ancal-blog.component';
import { AncalFooterComponent } from './ai-noise-cancelling-app-landing/ancal-footer/ancal-footer.component';
import { AncalPricingComponent } from './ai-noise-cancelling-app-landing/ancal-pricing/ancal-pricing.component';
import { AncalTestCanoraComponent } from './ai-noise-cancelling-app-landing/ancal-test-canora/ancal-test-canora.component';
import { AncalNavbarComponent } from './ai-noise-cancelling-app-landing/ancal-navbar/ancal-navbar.component';
import { AclBannerComponent } from './ai-chatbot-landing/acl-banner/acl-banner.component';
import { AclFooterComponent } from './ai-chatbot-landing/acl-footer/acl-footer.component';
import { AclCtaComponent } from './ai-chatbot-landing/acl-cta/acl-cta.component';
import { AclFeaturesComponent } from './ai-chatbot-landing/acl-features/acl-features.component';
import { AclAboutComponent } from './ai-chatbot-landing/acl-about/acl-about.component';
import { AclBrandsComponent } from './ai-chatbot-landing/acl-brands/acl-brands.component';
import { AclWhatWeDoComponent } from './ai-chatbot-landing/acl-what-we-do/acl-what-we-do.component';
import { AclTestimonialsComponent } from './ai-chatbot-landing/acl-testimonials/acl-testimonials.component';
import { AclIntegrationsComponent } from './ai-chatbot-landing/acl-integrations/acl-integrations.component';
import { AclPricingComponent } from './ai-chatbot-landing/acl-pricing/acl-pricing.component';
import { AclFaqComponent } from './ai-chatbot-landing/acl-faq/acl-faq.component';
import { AclBlogComponent } from './ai-chatbot-landing/acl-blog/acl-blog.component';
import { AclNavbarComponent } from './ai-chatbot-landing/acl-navbar/acl-navbar.component';
import { AwclBannerComponent } from './ai-writer-copywriting-landing/awcl-banner/awcl-banner.component';
import { AwclFeaturesComponent } from './ai-writer-copywriting-landing/awcl-features/awcl-features.component';
import { AwclNavbarComponent } from './ai-writer-copywriting-landing/awcl-navbar/awcl-navbar.component';
import { AwclAboutComponent } from './ai-writer-copywriting-landing/awcl-about/awcl-about.component';
import { AwclTestimonialsComponent } from './ai-writer-copywriting-landing/awcl-testimonials/awcl-testimonials.component';
import { AwclWhatWeDoComponent } from './ai-writer-copywriting-landing/awcl-what-we-do/awcl-what-we-do.component';
import { AwclPricingComponent } from './ai-writer-copywriting-landing/awcl-pricing/awcl-pricing.component';
import { AwclGetStartedComponent } from './ai-writer-copywriting-landing/awcl-get-started/awcl-get-started.component';
import { AwclFaqComponent } from './ai-writer-copywriting-landing/awcl-faq/awcl-faq.component';
import { AwclBlogComponent } from './ai-writer-copywriting-landing/awcl-blog/awcl-blog.component';
import { AwclCtaComponent } from './ai-writer-copywriting-landing/awcl-cta/awcl-cta.component';
import { AwclFooterComponent } from './ai-writer-copywriting-landing/awcl-footer/awcl-footer.component';
import { AppmlBannerComponent } from './ai-profile-picture-maker-landing/appml-banner/appml-banner.component';
import { AppmlNavbarComponent } from './ai-profile-picture-maker-landing/appml-navbar/appml-navbar.component';
import { AppmlFeaturesComponent } from './ai-profile-picture-maker-landing/appml-features/appml-features.component';
import { AppmlAboutComponent } from './ai-profile-picture-maker-landing/appml-about/appml-about.component';
import { AppmlFunfactsComponent } from './ai-profile-picture-maker-landing/appml-funfacts/appml-funfacts.component';
import { AppmlHowItsWorksComponent } from './ai-profile-picture-maker-landing/appml-how-its-works/appml-how-its-works.component';
import { AppmlGetStartedComponent } from './ai-profile-picture-maker-landing/appml-get-started/appml-get-started.component';
import { AppmlTestimonialsComponent } from './ai-profile-picture-maker-landing/appml-testimonials/appml-testimonials.component';
import { AppmlFaqComponent } from './ai-profile-picture-maker-landing/appml-faq/appml-faq.component';
import { AppmlCtaComponent } from './ai-profile-picture-maker-landing/appml-cta/appml-cta.component';
import { AppmlFooterComponent } from './ai-profile-picture-maker-landing/appml-footer/appml-footer.component';
import { AdmlBannerComponent } from './ai-digital-marketing-landing/adml-banner/adml-banner.component';
import { AdmlNavbarComponent } from './ai-digital-marketing-landing/adml-navbar/adml-navbar.component';
import { AdmlPartnersComponent } from './ai-digital-marketing-landing/adml-partners/adml-partners.component';
import { AdmlAboutComponent } from './ai-digital-marketing-landing/adml-about/adml-about.component';
import { AdmlFeaturesComponent } from './ai-digital-marketing-landing/adml-features/adml-features.component';
import { AdmlTestimonialsComponent } from './ai-digital-marketing-landing/adml-testimonials/adml-testimonials.component';
import { AdmlServicesComponent } from './ai-digital-marketing-landing/adml-services/adml-services.component';
import { AdmlWhatCanoraDoComponent } from './ai-digital-marketing-landing/adml-what-canora-do/adml-what-canora-do.component';
import { AdmlCtaComponent } from './ai-digital-marketing-landing/adml-cta/adml-cta.component';
import { AdmlBlogComponent } from './ai-digital-marketing-landing/adml-blog/adml-blog.component';
import { AdmlFooterComponent } from './ai-digital-marketing-landing/adml-footer/adml-footer.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { BlogDetailsPageComponent } from './blog-details-page/blog-details-page.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { FooterComponent } from './common/footer/footer.component';

@NgModule({
    declarations: [
        AppComponent,
        ErrorPageComponent,
        AiNoiseCancellingAppLandingComponent,
        AiChatbotLandingComponent,
        AiWriterCopywritingLandingComponent,
        AiProfilePictureMakerLandingComponent,
        AiDigitalMarketingLandingComponent,
        AncalBannerComponent,
        AncalFeaturesComponent,
        AncalBrandsComponent,
        AncalDownloadComponent,
        AncalWhatWeDoComponent,
        AncalSupportedComponent,
        AncalTestimonialsComponent,
        AncalCtaComponent,
        AncalFaqComponent,
        AncalBlogComponent,
        AncalFooterComponent,
        AncalPricingComponent,
        AncalTestCanoraComponent,
        AncalNavbarComponent,
        AclBannerComponent,
        AclFooterComponent,
        AclCtaComponent,
        AclFeaturesComponent,
        AclAboutComponent,
        AclBrandsComponent,
        AclWhatWeDoComponent,
        AclTestimonialsComponent,
        AclIntegrationsComponent,
        AclPricingComponent,
        AclFaqComponent,
        AclBlogComponent,
        AclNavbarComponent,
        AwclBannerComponent,
        AwclFeaturesComponent,
        AwclNavbarComponent,
        AwclAboutComponent,
        AwclTestimonialsComponent,
        AwclWhatWeDoComponent,
        AwclPricingComponent,
        AwclGetStartedComponent,
        AwclFaqComponent,
        AwclBlogComponent,
        AwclCtaComponent,
        AwclFooterComponent,
        AppmlBannerComponent,
        AppmlNavbarComponent,
        AppmlFeaturesComponent,
        AppmlAboutComponent,
        AppmlFunfactsComponent,
        AppmlHowItsWorksComponent,
        AppmlGetStartedComponent,
        AppmlTestimonialsComponent,
        AppmlFaqComponent,
        AppmlCtaComponent,
        AppmlFooterComponent,
        AdmlBannerComponent,
        AdmlNavbarComponent,
        AdmlPartnersComponent,
        AdmlAboutComponent,
        AdmlFeaturesComponent,
        AdmlTestimonialsComponent,
        AdmlServicesComponent,
        AdmlWhatCanoraDoComponent,
        AdmlCtaComponent,
        AdmlBlogComponent,
        AdmlFooterComponent,
        BlogPageComponent,
        BlogDetailsPageComponent,
        NavbarComponent,
        FooterComponent,
    ],
    imports: [
        BrowserModule,
        CarouselModule,
        AppRoutingModule,
        NgxScrollTopModule,
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }