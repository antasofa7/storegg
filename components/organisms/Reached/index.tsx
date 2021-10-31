import Line from '../../molecules/ReachedItem/Line';
import ReachedItem from '../../molecules/ReachedItem';

export default function Reached() {
  return (
        <section className="reached pt-50 pb-50">
            <div className="container-fluid">
                <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
                    <ReachedItem amount="290M+" name="Player Top Up" />
                    <Line />
                    <ReachedItem amount="12.500" name="Games Available" />
                    <Line />
                    <ReachedItem amount="99,9%" name="Happy Players" />
                    <Line />
                    <ReachedItem amount="4.7" name="Rating Worldwide" />
                </div>
            </div>
        </section>
  );
}
