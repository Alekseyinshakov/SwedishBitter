

    const listItems = document.querySelectorAll(".list__log-item");
    const dots = document.querySelectorAll(".list__img-dot");
    const tabs = document.querySelectorAll(".reviews__tab");
    const reviews = document.querySelectorAll(".reviews__box");

    listItems.forEach((element, i) => {
        element.addEventListener('click', function () {
            listItems.forEach(item => {
                item.classList.remove("active")
            });
            dots.forEach(dot => {
                dot.classList.remove("active")
            })
            element.classList.add("active");
            dots[i].classList.add("active");
        })
    })

    tabs.forEach((element, i) => {
            element.addEventListener('click', function () {
                tabs.forEach(item => {
                    item.classList.remove("reviews__tab-active")
                });
                reviews.forEach(item => {
                    item.classList.remove("reviews__box-active")
                })

                element.classList.add("reviews__tab-active");
                reviews[i].classList.add("reviews__box-active")
            })
        }

    )


