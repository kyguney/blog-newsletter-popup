"use client";
import React, { useState, useEffect } from "react";
import NewsletterPopup from "@/components/NewsletterPopup";

const BlogPost: React.FC = () => {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [popupClosed, setPopupClosed] = useState<boolean>(false);

  useEffect(() => {
    const hasSubmitted = localStorage.getItem("newsletterSubmitted") === "true";
    if (!hasSubmitted && !popupClosed) {
      /**
       * Handles the scroll event and shows the popup when the scroll position
       * reaches half of the document height.
       */
      const handleScroll = () => {
        const scrollPosition = window.scrollY + window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        if (scrollPosition >= documentHeight / 2 && !showPopup) {
          setShowPopup(true);
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [popupClosed, showPopup]);

  /**
   * Closes the popup and prevents it from showing again on every scroll without refreshing the page.
   */
  const handlePopupClose = () => {
    setPopupClosed(true);
    setShowPopup(false);
  };

  return (
    <>
      <div className="flex min-h-screen flex-col">
        <header className="bg-blue-500 p-5 text-white">
          <h1 className="text-4xl">My First Blog</h1>
        </header>
        <main className="flex-grow p-5 text-left">
          <p className="mb-4 text-lg text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            fringilla mollis condimentum. Maecenas rhoncus id nulla sit amet
            efficitur. Sed commodo ipsum odio, facilisis scelerisque leo tempor
            at. Proin laoreet porta ipsum, sed sagittis nibh facilisis ac.
            Vivamus aliquam mattis nulla. Donec urna risus, ullamcorper tempus
            viverra at, tincidunt in massa. Suspendisse tempor risus id arcu
            placerat eleifend.
          </p>
          <p className="mb-4 text-lg text-gray-700">
            Nam vel lorem fringilla, finibus nisl id, semper sem. Quisque
            pharetra est at justo molestie feugiat. Etiam faucibus, elit sed
            euismod dapibus, neque felis egestas arcu, id tristique ligula justo
            vitae ipsum. Proin vel molestie augue, non euismod elit. Etiam quis
            lacus sed lacus consequat egestas. Proin at suscipit nibh. Maecenas
            blandit egestas porta. Sed sagittis nulla eu augue rutrum fringilla.
            Donec fermentum lorem id lacinia interdum. Phasellus ut hendrerit
            tortor. Vestibulum non velit dui.
          </p>
          <p className="mb-4 text-lg text-gray-700">
            Nullam sed dui et nunc tincidunt tincidunt. Aenean auctor, libero
            sit amet vestibulum tincidunt, lorem mi dictum erat, nec ultrices
            nulla dolor id nunc. Nulla facilisi. Nullam nec purus ac nunc
            fermentum varius. Sed at nisl ut dolor fermentum ultricies. Sed nec
            nunc auctor, luctus metus id, lacinia lorem. Nullam nec purus ac
            nunc fermentum varius. Sed at nisl ut dolor fermentum ultricies. Sed
            nec nunc auctor, luctus metus id, lacinia lorem.
          </p>
          <p className="mb-4 text-lg text-gray-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequuntur magni nihil quaerat sint consequatur deserunt, ipsa
            nisi aspernatur dolor beatae quo dolorem itaque maiores delectus at?
            Amet harum accusamus odio?
          </p>
          <p className="mb-4 text-lg text-gray-700">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est animi
            nostrum, quia quos fugit facilis beatae voluptas. Adipisci numquam
            magnam magni eveniet ullam, est dolores dignissimos libero molestias
            in enim?
          </p>
          <p className="mb-4 text-lg text-gray-700">
            Quisque enim augue, mattis a nisi ullamcorper, placerat euismod
            nisl. Fusce sollicitudin semper ornare. Mauris rhoncus, urna vel
            suscipit posuere, leo arcu posuere odio, et suscipit nulla turpis
            mattis sem. Suspendisse dictum enim eu nunc tristique pulvinar. In
            feugiat dui at magna lacinia, nec ullamcorper odio rutrum. Proin
            luctus quam sem, ut bibendum magna feugiat vel. Maecenas vulputate
            pretium diam, non porttitor nisi faucibus nec. Nam dapibus tortor
            rutrum turpis ultricies, eu rutrum lacus sagittis. Suspendisse sed
            tempus ante. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Nunc non odio imperdiet, vulputate
            tortor at, posuere neque. Suspendisse at pellentesque ante. Vivamus
            imperdiet diam quis lacinia tempus. Mauris cursus quam non
            pellentesque varius. Vivamus quis purus sed eros vehicula dignissim
            sed ut ligula.
          </p>
          <p className="mb-4 text-lg text-gray-700">
            Cras convallis enim et metus venenatis tempor. Proin ac est
            vestibulum ligula accumsan porta in non augue. Proin vel nisl
            congue, ullamcorper ipsum a, vestibulum nibh. Aliquam interdum ut
            dolor quis aliquam. Fusce facilisis sem sit amet ex aliquet, vel
            consequat mauris molestie. Aenean scelerisque tellus et tellus
            euismod, sed blandit quam imperdiet. Aenean egestas ipsum augue, ut
            tristique neque fringilla sed. Aliquam augue ex, accumsan sit amet
            felis nec, semper rhoncus sapien. Suspendisse sed consectetur ante.
            Quisque elementum venenatis justo, ut pulvinar urna tempus ac. Fusce
            vitae gravida metus. Duis pharetra elementum velit at feugiat.
            Aliquam eu ornare justo, dignissim consequat purus. Pellentesque
            urna lacus, semper vitae gravida quis, hendrerit non massa. Orci
            varius natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Phasellus justo nisi, pretium non sapien vel,
            suscipit blandit quam. Fusce a quam elit. Sed maximus pharetra
            turpis, id vestibulum arcu efficitur id. Morbi sit amet libero id
            turpis dignissim lobortis. In ac est semper, ullamcorper urna at,
            tristique nulla. Mauris laoreet felis in leo lacinia, quis ultricies
            sem commodo. Etiam et est vel odio mattis vestibulum non vel elit.
            Mauris facilisis fringilla nisi eu eleifend. Vestibulum volutpat
            cursus nulla, ut tincidunt nibh convallis ac. Proin eros odio,
            laoreet non diam cursus, consequat volutpat turpis. Cras auctor
            venenatis tellus. Donec mollis at arcu quis tempus. Sed gravida
            sapien vitae rutrum ultrices. Etiam porta sodales lacus id varius.
            Nulla egestas lorem et ipsum viverra, a vulputate diam iaculis. Sed
            venenatis nisi sit amet lacinia condimentum. Etiam ultrices lorem
            finibus ex aliquet blandit. Sed posuere eros nisl, sed volutpat
            mauris aliquet sed. Nam rutrum libero aliquet, rutrum nisi ut,
            sagittis ligula. In hac habitasse platea dictumst. Quisque sit amet
            leo eu lorem imperdiet congue non id turpis. Integer ornare urna
            leo, nec aliquet erat tempor nec. Vestibulum lacus dolor, sagittis
            id sollicitudin eu, faucibus vitae enim. Cras a nulla sapien. Sed
            quis facilisis nunc. Ut consectetur hendrerit tincidunt. Mauris nec
            purus eget turpis maximus aliquet.
          </p>
        </main>
      </div>
      {showPopup && (
        <NewsletterPopup
          onClose={handlePopupClose}
          title="Are you stressed?"
          description="Sign up now and we'll send you supportive information onstress management."
          thankyouTitle="Perfect, it worked!"
          thankyouDescription="Thank you for signing up for our newsletter. Be excited, many exciting strategies and tips await you soon from the world of psychology and psychotherapy!"
          submitButtonText="Subscribe"
          closeButtonText="Close"
        />
      )}
    </>
  );
};

export default BlogPost;
