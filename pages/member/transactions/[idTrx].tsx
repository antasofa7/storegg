import jwtDecode from 'jwt-decode';
import TransactionDetailContent from '../../../components/organisms/TransactionDetailContent';
import { HistroyTransactionTypes, JWTPayloadTypes, UserTypes } from '../../../services/data-types';
import { getTransactionDetail } from '../../../services/member';

interface TransactionDetailProps {
  transactionDetail: HistroyTransactionTypes
}

export default function TransactionDetail(props: TransactionDetailProps) {
  const { transactionDetail } = props;
  return (
        <section className="transactions-detail overflow-auto">
            <TransactionDetailContent data={transactionDetail} />
        </section>
  );
}

interface GetServerSideProps {
  req: {
    cookies: {
      token: string
    }
  },
  params: {
    idTrx: string
  }
}

export async function getServerSideProps({ req, params }: GetServerSideProps) {
  const { idTrx } = params;
  const { token } = req.cookies;

  if (!token) {
    return {
      redirect: {
        destination: '/sign-in',
        permanent: false,
      },
    };
  }

  const jwtToken = Buffer.from(token, 'base64').toString('ascii');
  const payload: JWTPayloadTypes = jwtDecode(jwtToken);
  const user: UserTypes = payload.player;
  const IMG = process.env.NEXT_PUBLIC_IMG;
  user.avatar = `${IMG}/${user.avatar}`;

  const response = await getTransactionDetail(idTrx, jwtToken);

  return {
    props: {
      transactionDetail: response.data,
    },
  };
}
