import React from 'react';

const allProvidersOnboarding = () => {
  return (
    <section>
      <section>
        <div>
          <span>search</span>
          <input
            type="text"
            placeholder="Search providers or select them below..."
          />
          <span>close</span>
        </div>
      </section>
      <aside>
        <h2>All Providers</h2>
        <p>25 providers in Ireland</p>
        <p>
          Let's start by adding one to three providers in your list. You can add
          more later
        </p>
        <p>If you can't find one, please request it below.</p>
      </aside>
      <aside>
        <h2>Click a provider to view details here.</h2>
      </aside>
    </section>
  );
};

export default allProvidersOnboarding;
