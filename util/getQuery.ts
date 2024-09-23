import { groq } from "next-sanity";

export const socialQuery = groq`
    *[_type == "social"]
`;

export const pageInfoQuery = groq`
    *[_type == "pageInfo"][0]{
        heroImage,
        name,
        backgroundInfo,
        heroMessage,
        phoneNumber,
        socials,
        email,
        role,
        profilePic,
        address,
        resume,
    }
`;
export const projectQuery = groq`
    *[_type == "project"]{
    summary,
    image,
    linkToBuild,
    title,
    linkToGit,
    techStack,
    _updatedAt,
} | order(_updatedAt desc)
`;

export const experienceQuery = groq`
    *[_type == "experience"]{
    company,
    jobTitle,
    companyImage,
    points,
}
`;
export const skillQuery = groq`
    *[_type == "skill"]{
    image,
    progress,
    title,  
}
`;
