// Регистрируем плагины
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

document.addEventListener("DOMContentLoaded", () => {
  let mm = gsap.matchMedia();

  mm.add(
    {
      // Условия для адаптива
      isDesktop: "(min-width: 769px)",
      isMobile: "(max-width: 768px)",
    },
    (context) => {
      let { isDesktop, isMobile } = context.conditions;

      // Первая секция: Анимация лого и текста
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".starting_container",
          start: "top top",
          end: "+=500", // Используем относительное значение для гибкости
          scrub: 1,
          pin: true,
        },
      });

      tl.to(
        ".logo",
        {
          x: isMobile ? -50 : -300,
          y: isMobile ? -280 : -200,
          duration: 5,
          ease: "power1.inOut",
        },
        0,
      )
        .to(
          ".Sarting_container_p",
          {
            x: isMobile ? 450 : 300,
            y: isMobile ? -120 : -250,
            duration: 5,
            ease: "power1.inOut",
          },
          0,
        )
        .from(
          ".starting_container_P",
          {
            opacity: 0,
            x: isMobile ? -20 : -100,
            duration: 4,
          },
          2,
        );

      // Вторая секция: Карточки пользователей
      const TwoTM = gsap.timeline({
        scrollTrigger: {
          trigger: ".User_Card_Container",
          start: "top top",
          end: "+=3000",
          scrub: 1,
          pin: true,
        },
      });

      TwoTM.from(
        ".User_Card_Container",
        {
          x: 200,
          opacity: 0,
          duration: 1,
        },
        0,
      );

      TwoTM.from(
        ".Life_card",
        {
          y: 100,
          opacity: 0,
          duration: 1,
        },
        1,
      );

      TwoTM.from(
        ".UserCardText",
        {
          y: -500,
          opacity: 0,
          duration: 1,
        },
        2,
      );

      TwoTM.to(
        ".UserCardText",
        {
          y: -500,
          opacity: 0,
          duration: 1,
        },
        3,
      );
      TwoTM.from(
        ".usercardtext-2",
        {
          y: 500,
          opacity: 0,
          duration: 1,
        },
        4,
      );

      gsap.to(".Life_card img", {
        scale: 1.1,
        repeat: -1,
        yoyo: true,
        duration: 4,
        ease: "sine.inOut",
      });

      // 3-th Section
      const tlThree = gsap.timeline({
        scrollTrigger: {
          trigger: ".how_they_get_Container",
          start: " top top",
          end: "+=2000",
          pin: true,
          scrub: true,
        },
      });

      tlThree.from(
        ".how_they_get_Container",
        {
          opacity: 0,
          duration: 1,
        },
        0,
      );

      tlThree.from(
        ".how_they_get_text_container",
        {
          x: -300,
          opacity: 0,
        },
        2,
      );

      tlThree.to(
        ".how_they_get_text_container",
        {
          x: -300,
          opacity: 0,
        },
        3,
      );
      tlThree.from(
        ".how_they_get_svg_container img",
        {
          x: 300,
          opacity: 0,
        },
        1,
      );
      tlThree.from(
        ".how_they_get_text_container1",
        {
          opacity: 0,
          x: 300,
        },
        4,
      );

      //Section 4

      const tlFour = gsap.timeline({
        scrollTrigger: {
          trigger: ".Telegram_bot_container",
          pin: true,
          scrub: 1,
          start: "top top",
          end: "+=800",
        },
      });

      tlFour.from('.phone1', {
        scale:0,
        y:-900,
      }, 0);
      tlFour.from('.Telegram_bot_container_text', {
        x:-500,
        opacity:0,
      }, 1)
      tlFour.to('.phone1', {
        opacity:0,
        y:100,
      }, 2);
      tlFour.to('phone2', {
        opacity:1,
        y:-200
      }, 3);
    },
  );
});
