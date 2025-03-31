import React from "react";
import Hero from "../components/sections/hero"
import { pages } from "/content/content.js"
import Column1 from "../components/sections/column1"
import Bullet from "../components/sections/bullet"

const Privacy = () =>{
    return(
        <main className="flex flex-col">
            <Hero 
                title={pages.privacy.hero.title} 
                imageSrc={"floral-el.svg"}/>

            <Column1 
                className="reads-title"
                title={pages.privacy.section1.title}
                text1={pages.privacy.section1.text1}
            />
            <Column1 
                className="vision"
                title={pages.privacy.policy1.title}
                text1={pages.privacy.policy1.text1}
                text2={pages.privacy.policy1.text2}
            />
            <Column1 
                className="reads-title "
                title={pages.privacy.policy2.title}
                text1={pages.privacy.policy2.text1}
                text2={pages.privacy.policy2.text2}
            />
            <Column1 
                className="vision"
                title={pages.privacy.policy3.title}
                text1={pages.privacy.policy3.text1}
            >
                <Bullet
                    className="pt-0"
                    points={{
                        point1:pages.privacy.policy3.point1, 
                        point2:pages.privacy.policy3.point2,
                        point3:pages.privacy.policy3.point3,  
                        point4:pages.privacy.policy3.point4,  
                        point5:pages.privacy.policy3.point5,  
                     }}
                />
                <p className="text-xl w-1/2 text-center pb-6">In those rare instances where it is necessary for Dr. Walker to disclose information relating to your counseling without your permission, Dr. Walker will make every effort to fully discuss it with you. However, when Dr. Walker is required to disclose your records pursuant to a court order issued under the Patriot Act, I may be prohibited by the terms of the order from notifying you of the disclosure.</p>
                <p className="text-xl w-1/2 text-center">There are two other instances where Dr. Walker, the therapist, may also be released from the confidentiality rule. One is if there is a charge brought against me to the licensing board or in court, I am allowed to use all information to defend themselves. The second is if a patient does not pay the bill for therapy, after reasonable efforts at collections Dr. Walker is allowed to involve legitimate collections activity by other parties, which will release information such as dates of service, charges, payments and balances necessary for the collections process.</p>
            </Column1>
            <Column1 
                className="reads-title "
                title={pages.privacy.policy4.title}
                text1={pages.privacy.policy4.text1}
                text2={pages.privacy.policy4.text2}
            />
            <Column1 
                className="vision"
                title={pages.privacy.policy5.title}
                text1={pages.privacy.policy5.text1}
                text2={pages.privacy.policy5.text2}
                text3={pages.privacy.policy5.text3}
                >
                <Bullet
                    className="pt-0"
                    points={{
                        point1:pages.privacy.policy5.point1, 
                        point2:pages.privacy.policy5.point2,
                        point3:pages.privacy.policy5.point3,  
                        point4:pages.privacy.policy5.point4,  
                        point5:pages.privacy.policy5.point5,  
                     }}
                />
            </Column1>
            <Column1 
                className="reads-title "
                title={pages.privacy.policy6.title}
                text1={pages.privacy.policy6.text1}
            />
            <Column1 
                className="vision"
                title={pages.privacy.policy7.title}
                text1={pages.privacy.policy7.text1}
            />
            <Column1 
                className="reads-title "
                title={pages.privacy.policy8.title}
                text1={pages.privacy.policy8.text1}
            />
            <Column1 
                className="vision"
                title={pages.privacy.policy9.title}
                text1={pages.privacy.policy9.text1}
                text2={pages.privacy.policy9.text2}
                text3={pages.privacy.policy9.text3}
            />
        </main>
    )
}

export default Privacy
