// window.onload = () => {
//     const transition = document.querySelector(".transition");
//     const anchors = document.querySelectorAll("a");
//     setTimeout(() => {
//         transition.classList.remove("is_active");
//     }, 500);
//     for (let i = 0; i < anchors.length; i++) {
//         const anchor = anchors[i];

//         anchor.addEventListener("click", (event) => {
//             event.preventDefault();
//             let target = anchors[i].href;
//             transition.classList.add("is_active");
//             setTimeout(() => {
//                 window.location.href = target;

//             }, 500);

//         })

//     }
// }