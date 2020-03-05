export enum ErrorMessages {
  TRANSACTION_FAILED = 'transactionFailed',
  TRANSACTION_TIMEOUT = 'transactionTimeout',
  EXCHANGE_FAILED = 'exchangeFailed',
  INVALID_INVITATION = 'invalidInvite',
  INCORRECT_PIN = 'incorrectPin',
  SET_PIN_FAILED = 'setPinFailed',
  NSF_GOLD = 'notEnoughGoldError',
  NSF_DOLLARS = 'notEnoughDollarsError',
  NSF_TO_SEND = 'needMoreFundsToSend',
  INVALID_AMOUNT = 'invalidAmount',
  INVALID_BACKUP_PHRASE = 'backupKeyFlow6:invalidBackupPhrase',
  IMPORT_BACKUP_FAILED = 'backupKeyFlow6:importBackupFailed',
  BACKUP_QUIZ_FAILED = 'backupKeyFlow6:backupQuizFailed',
  FAILED_FETCH_MNEMONIC = 'backupKeyFlow6:failedFetchMnemonic',
  INVALID_PHONE_NUMBER = 'invalidPhone',
  MISSING_FULL_NAME = 'missingFullName',
  NOT_READY_FOR_CODE = 'nuxVerification2:notReadyForCode',
  EMPTY_ATTESTATION_CODE = 'nuxVerification2:emptyVerificationCode',
  INVALID_ATTESTATION_CODE = 'nuxVerification2:invalidVerificationCode',
  REPEAT_ATTESTATION_CODE = 'nuxVerification2:repeatVerificationCode',
  REVEAL_ATTESTATION_FAILURE = 'nuxVerification2:revealAttestationFailure',
  VERIFICATION_FAILURE = 'nuxVerification2:verificationFailure',
  VERIFICATION_TIMEOUT = 'nuxVerification2:verificationTimeout',
  INVALID_ACCOUNT = 'invalidAccount',
  CANT_SELECT_INVALID_PHONE = 'cantSelectInvalidPhone',
  CAN_NOT_REQUEST_FROM_UNVERIFIED = 'canNotRequestFromUnverified',
  REFRESH_FAILED = 'refreshFailedUnexpectedly',
  INVITE_FAILED = 'inviteFailed',
  INVITE_OPEN_APP_FAILED = 'inviteOpenAppFailed',
  SEND_PAYMENT_FAILED = 'sendPaymentFailed',
  PAYMENT_REQUEST_FAILED = 'paymentRequestFailed',
  ESCROW_TRANSFER_FAILED = 'escrowTransferFailed',
  ESCROW_WITHDRAWAL_FAILED = 'escrowWithdrawalFailed',
  RECLAIMING_ESCROWED_PAYMENT_FAILED = 'reclaimingEscrowedPaymentFailed',
  EXCHANGE_RATE_FAILED = 'exchangeFlow9:errorRefreshingRate',
  EXCHANGE_RATE_CHANGE = 'exchangeFlow9:exchangeRateChange',
  EMPTY_INVITE_CODE = 'inviteFlow11:emptyInviteCode',
  REDEEM_INVITE_FAILED = 'inviteFlow11:redeemFailed',
  REDEEM_INVITE_TIMEOUT = 'inviteFlow11:redeemInviteTimeout',
  ACCOUNT_SETUP_FAILED = 'inviteFlow11:accountSetupFailed',
  FIREBASE_DISABLED = 'dev:firebaseDisabled',
  FIREBASE_FAILED = 'firebaseFailed',
  IMPORT_CONTACTS_FAILED = 'importContactsFailed',
  GAS_PRICE_UPDATE_FAILED = 'gasPriceUpdateFailed',
  QR_FAILED_NO_ADDRESS = 'qrFailedNoAddress',
  QR_FAILED_INVALID_ADDRESS = 'qrFailedInvalidAddress',
  CORRUPTED_CHAIN_DELETED = 'corruptedChainDeleted',
  CALCULATE_FEE_FAILED = 'calculateFeeFailed',
  FAILED_TO_SWITCH_SYNC_MODES = 'failedToSwitchSyncModes',
  SMS_ERROR = 'walletFlow5:SMSError',
  PAYMENT_REQUEST_UPDATE_FAILED = 'paymentRequestFlow:paymentRequestUpdateFailed',
}
