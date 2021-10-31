import { useState } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { BankTypes, NominalTypes, PaymentTypes } from '../../../services/data-types';
import NominalItem from './NominalItem';
import PaymentItem from './PaymentItem';

interface TopUpFormProps {
  nominals: NominalTypes[],
  payments: PaymentTypes[]
}

export default function TopUpForm(props: TopUpFormProps) {
  const { nominals, payments } = props;
  const [verifyID, setVerifyID] = useState('');
  const [bankAccountName, setBankAccountName] = useState('');
  const [nominalItem, setNominal] = useState({});
  const [paymentItem, setPayment] = useState({});

  const router = useRouter();

  const onNominalItemChange = (data: NominalTypes) => {
    setNominal(data);
  };

  const onPaymentItemChange = (payment: PaymentTypes, bank: BankTypes) => {
    const data = {
      payment,
      bank,
    };
    setPayment(data);
  };

  const onSubmit = () => {
    if (verifyID === '') {
      toast.error('Silakan isi verify ID terlebih dahulu!');
    } else if (Object.keys(nominalItem).length === 0) {
      toast.error('Silakan pilih nominal top up terlebih dahulu!');
    } else if (Object.keys(paymentItem).length === 0) {
      toast.error('Silakan pilih payment methode terlebih dahulu!');
    } else if (bankAccountName === '') {
      toast.error('Silakan isi bank account name terlebih dahulu!');
    } else {
      const data = {
        verifyID,
        bankAccountName,
        nominalItem,
        paymentItem,
      };
      localStorage.setItem('data-topUp', JSON.stringify(data));
      router.push('/checkout');
    }
  };

  return (
        <>
          <div className="pt-md-50 pt-30">
              <div className="">
                  <label
                    htmlFor="ID"
                    className="form-label text-lg fw-medium color-palette-1 mb-10"
                  >
                      Verify ID
                  </label>
                  <input
                    type="text"
                    className="form-control rounded-pill text-lg"
                    id="ID"
                    name="ID"
                    aria-describedby="verifyID"
                    placeholder="Enter your ID"
                    value={verifyID}
                    onChange={(event) => { setVerifyID(event.target.value); }}
                  />
              </div>
          </div>
          <div className="pt-md-50 pb-md-50 pt-30 pb-20">
              <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
                  Nominal Top Up
              </p>
              <div className="row justify-content-between">
                {nominals.map((nominal) => (
                  <NominalItem
                    key={nominal._id}
                    _id={nominal._id}
                    coinName={nominal.coinName}
                    coinQuantity={nominal.coinQuantity}
                    price={nominal.price}
                    onChange={() => onNominalItemChange(nominal)}
                  />
                ))}
                  <div className="col-lg-4 col-sm-6" />
              </div>
          </div>
          <div className="pb-md-50 pb-20">
              <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
                  Payment Method
              </p>
              <fieldset id="paymentMethod">
                  <div className="row justify-content-between">
                    {payments.map((payment) => payment.banks.map((bank) => (
                        <PaymentItem
                          bankID={bank._id}
                          type={payment.type}
                          name={bank.bankName}
                          onChange={() => onPaymentItemChange(payment, bank)}
                        />
                    )))}
                      <div className="col-lg-4 col-sm-6" />
                  </div>
              </fieldset>
          </div>
          <div className="pb-50">
              <label
                htmlFor="bankAccount"
                className="form-label text-lg fw-medium color-palette-1 mb-10"

              >
                  Bank Account Name
              </label>
              <input
                type="text"
                className="form-control rounded-pill text-lg"
                id="bankAccount"
                name="bankAc/count"
                aria-describedby="bankAccount"
                placeholder="Enter your Bank Account Name"
                value={bankAccountName}
                onChange={(event) => setBankAccountName(event.target.value)}
              />
          </div>
          <div className="d-sm-block d-flex flex-column w-100">
              <button
                type="button"
                className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg"
                onClick={onSubmit}
              >
                  Continue
              </button>
          </div>
        </>
  );
}
