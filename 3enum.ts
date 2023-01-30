enum MemberShip {
    Simple,
    Standard,
    Premium
}

const membership = MemberShip.Standard
const membershipReverse = MemberShip[2]

console.log(membership)//1
console.log(membershipReverse)//Premium

enum SocialMedia {
    FaceBook = 'FaceBook',
    YouTube = 'YouTube',
    VK = 'VK',
    Instagram = 'Instagram'
}

const social = SocialMedia.VK;
console.log(social)