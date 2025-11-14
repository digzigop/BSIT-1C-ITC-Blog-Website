// Member data with all information
const memberData = {
    dvaughn: {
        name: "D'Vaughn Gray V. Babanto",
        age: "18",
        address: "Lunsayan Street, Sumpong, Malaybalay City, Bukidnon, Region X, Mindanao, Philippines, Asia, Earth, Solar System, Milkyway Galaxy",
        course: "BSIT",
        section: "1C",
        photo: "Dbon Blog pfp.jpg",
        facebook: "https://www.facebook.com/dvaughn.babanto",
        instagram: "https://www.instagram.com/digidigz/",
        github: "https://github.com/digzigop",
        email: "digoybabanto12@gmail.com"
    },
    vaughn: {
        name: "Vaughn Aram A. Autentico",
        age: "18",
        address: "Malayanan, San Fernando, Bukidnon, Region X, Mindanao, Philippines, Asia, Earth, Solar System, Milkyway Galaxy",
        course: "BSIT",
        section: "1C",
        photo: "Vaughn Blog pfp.jpg",
        facebook: "https://www.facebook.com/vaughn.aram.Codm",
        instagram: "https://www.instagram.com/nerfedvaughn/",
        github: "https://github.com/2501110162-create",
        email: "authenticbon@gmail.com"
    },
    kim: {
        name: "Jehoiakim Jezer M. Luna",
        age: "19",
        address: "Cawayan, Impasugong, Bukidnon, Region X, Mindanao, Philippines, Asia, Earth, Solar System, Milkyway Galaxy",
        course: "BSIT",
        section: "1C",
        photo: "Kim Blog pfp.jpg",
        facebook: "https://www.facebook.com/jehoiakim.luna",
        instagram: "https://www.instagram.com/jezeerrlunaaa01/",
        github: "https://github.com/jezerrlunz",
        email: "jehoiakimluna@gmail.com"
    },
    leomar: {
        name: "Leomar Dave Sumaga",
        age: "18",
        address: "Cawayan, Impasugong, Bukidnon, Region X, Mindanao, Philippines, Asia, Earth, Solar System, Milkyway Galaxy",
        course: "BSIT",
        section: "1C",
        photo: "Leomar Blog pfp.jpg",
        facebook: "https://www.facebook.com/hzhsg.gaha",
        instagram: "https://www.instagram.com/leo.mis_u/",
        github: "https://github.com/Leo-dave1051",
        email: "leomardavepogi@gmail.com"
    },
    von: {
        name: "Von Anthony O. Victoria",
        age: "19",
        address: "Sta. Cruz St. Sumpong, Malaybalay City, Bukidnon, Region X, Mindanao, Philippines, Asia, Earth, Solar System, Milkyway Galaxy",
        course: "BSIT",
        section: "1C",
        photo: "Von Blog pfp.jpg",
        facebook: "https://www.facebook.com/von.victoria.3",
        instagram: "https://www.instagram.com/vonehvix_/",
        github: "https://github.com/2501115845",
        email: "vonvictoria17@gmail.com"
    }
};

function openMemberModal(memberId) {
    const member = memberData[memberId];
    if (!member) return;

    // Update modal with member data
    document.getElementById('modalPhoto').src = member.photo;
    document.getElementById('modalName').textContent = member.name;
    document.getElementById('modalAge').textContent = member.age;
    document.getElementById('modalAddress').textContent = member.address;
    document.getElementById('modalCourse').textContent = member.course;
    document.getElementById('modalSection').textContent = member.section;

    // Update social links
    document.getElementById('modalFacebook').href = member.facebook;
    document.getElementById('modalInstagram').href = member.instagram;
    document.getElementById('modalGithub').href = member.github;
    document.getElementById('modalEmail').href = `mailto:${member.email}`;

    // Show modal
    const modal = document.getElementById('memberModal');
    modal.classList.remove('hidden');
    modal.classList.add('active');
}

function closeMemberModal() {
    const modal = document.getElementById('memberModal');
    modal.classList.remove('active');
    modal.classList.add('hidden');
}

// Close modal when clicking outside of content
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('memberModal');
    if (modal) {
        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                closeMemberModal();
            }
        });
    }
});

function toggleGroupContact() {
    const group = document.querySelector('.group-subbuttons');
    group.classList.toggle('hidden');
}

function showPhone() {
    alert("Call us at: +63 9509034091");
}
