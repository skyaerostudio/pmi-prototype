/**
 * Donation Modal Component
 * Reusable modal for voluntary donations after user confirmations
 */

class DonationModal {
    constructor() {
        this.modal = null;
        this.overlay = null;
        this.selectedAmount = null;
        this.onDonateCallback = null;
    }

    /**
     * Show the donation modal
     * @param {Object} options - Configuration options
     * @param {string} options.context - Context message (e.g., "Terima kasih telah menghubungkan donor!")
     * @param {Function} options.onDonate - Callback when user donates
     * @param {Function} options.onSkip - Callback when user skips
     */
    show(options = {}) {
        const {
            context = 'Terima kasih atas partisipasi Anda!',
            onDonate = () => { },
            onSkip = () => { }
        } = options;

        this.onDonateCallback = onDonate;
        this.onSkipCallback = onSkip;

        // Create modal HTML
        this.createModal(context);

        // Add to DOM
        document.body.appendChild(this.overlay);

        // Trigger animation
        setTimeout(() => {
            this.overlay.classList.add('show');
        }, 10);

        // Setup event listeners
        this.setupEventListeners();
    }

    createModal(context) {
        // Create overlay
        this.overlay = document.createElement('div');
        this.overlay.className = 'donation-overlay';
        this.overlay.innerHTML = `
      <div class="donation-modal">
        <div class="donation-header">
          <div class="donation-icon">❤️</div>
          <h2 class="donation-title">Dukung PMI</h2>
          <p class="donation-context">${context}</p>
        </div>
        
        <div class="donation-body">
          <p class="donation-message">
            Donasi sukarela Anda membantu PMI melayani lebih banyak orang dan menyelamatkan lebih banyak nyawa.
          </p>
          
          <div class="donation-amounts">
            <button class="donation-amount-btn" data-amount="5000">
              <span class="amount-value">Rp 5.000</span>
            </button>
            <button class="donation-amount-btn" data-amount="10000">
              <span class="amount-value">Rp 10.000</span>
            </button>
            <button class="donation-amount-btn" data-amount="20000">
              <span class="amount-value">Rp 20.000</span>
            </button>
            <button class="donation-amount-btn" data-amount="30000">
              <span class="amount-value">Rp 30.000</span>
            </button>
            <button class="donation-amount-btn" data-amount="50000">
              <span class="amount-value">Rp 50.000</span>
            </button>
          </div>
        </div>
        
        <div class="donation-footer">
          <button class="btn-skip">Tidak Sekarang</button>
          <button class="btn-donate" disabled>Donasi</button>
        </div>
      </div>
    `;

        this.modal = this.overlay.querySelector('.donation-modal');
    }

    setupEventListeners() {
        // Amount selection
        const amountButtons = this.overlay.querySelectorAll('.donation-amount-btn');
        const donateButton = this.overlay.querySelector('.btn-donate');

        amountButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove previous selection
                amountButtons.forEach(b => b.classList.remove('selected'));

                // Select current
                btn.classList.add('selected');
                this.selectedAmount = parseInt(btn.dataset.amount);

                // Enable donate button
                donateButton.disabled = false;
            });
        });

        // Donate button
        donateButton.addEventListener('click', () => {
            this.handleDonate();
        });

        // Skip button
        const skipButton = this.overlay.querySelector('.btn-skip');
        skipButton.addEventListener('click', () => {
            this.handleSkip();
        });

        // Click outside to close
        this.overlay.addEventListener('click', (e) => {
            if (e.target === this.overlay) {
                this.handleSkip();
            }
        });
    }

    handleDonate() {
        if (!this.selectedAmount) return;

        // Show processing state
        const donateButton = this.overlay.querySelector('.btn-donate');
        donateButton.textContent = 'Memproses...';
        donateButton.disabled = true;

        // Simulate payment processing
        setTimeout(() => {
            this.showThankYou();

            // Call callback
            if (this.onDonateCallback) {
                this.onDonateCallback(this.selectedAmount);
            }

            // Close modal after showing thank you
            setTimeout(() => {
                this.close();
            }, 2000);
        }, 1000);
    }

    handleSkip() {
        if (this.onSkipCallback) {
            this.onSkipCallback();
        }
        this.close();
    }

    showThankYou() {
        const modalBody = this.modal.querySelector('.donation-body');
        const modalFooter = this.modal.querySelector('.donation-footer');

        modalBody.innerHTML = `
      <div class="thank-you-message">
        <div class="thank-you-icon">🙏</div>
        <h3>Terima Kasih!</h3>
        <p>Donasi Anda sebesar <strong>Rp ${this.selectedAmount.toLocaleString('id-ID')}</strong> sangat berarti bagi kami.</p>
        <p class="thank-you-subtext">Bersama kita selamatkan lebih banyak nyawa.</p>
      </div>
    `;

        modalFooter.style.display = 'none';
    }

    close() {
        this.overlay.classList.remove('show');

        setTimeout(() => {
            if (this.overlay && this.overlay.parentNode) {
                this.overlay.parentNode.removeChild(this.overlay);
            }
            this.selectedAmount = null;
            this.onDonateCallback = null;
            this.onSkipCallback = null;
        }, 300);
    }
}

// Export singleton instance
const donationModal = new DonationModal();
