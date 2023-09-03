import DetailsFacilities from "@/components/details/DetailsFacilities/DetailsFacilities";
import Header from "@/components/details/Header/Header";
import HouseRules from "@/components/details/HouseRules/HouseRules";
import ImagesCom from "@/components/details/ImagesCom/ImagesCom";
import MostPopularFacilities from "@/components/details/MostPopularFacilities/MostPopularFacilities";
import ReviewsComp from "@/components/details/Review/review";
import ReviewsModal from "@/components/details/Review/reviewmodal";
import Reviews from "@/components/details/Reviews/Reviews";
import SingleRoomDetails from "@/components/details/SingleRoomDetails/SingleRoomDetails";
import DetailsMapIndex from "@/components/details/detailMap";

const RoomDetails = async () => {
  const res = await fetch(
    "https://raw.githubusercontent.com/HayatEmraan/dwelling/raju/public/fake.json"
  );
  const data = await res.json();

  const res1 = await fetch(
    "https://dwelling-bright-server.vercel.app/api/v1/getdetails/64f1d62a42ce44beb216c160"
  );
  const data1 = await res1.json();
  console.log(data)
  return (
    <div className="max-w-6xl lg:mx-auto px-5">
      {/* Header Section */}
      <Header data={data}></Header>
      {/* Grid  Images */}
      <ImagesCom data={data}></ImagesCom>
      {/* Details Sections */}
      <SingleRoomDetails data={data}></SingleRoomDetails>
      {/* Facilities */}
      <div className="my-5">
        <div className=" my-5">
          <h2 className="font-bold text-xl">Facilities of Saint Martin Ltd.</h2>
        </div>
        {/* Most Popular */}
        <MostPopularFacilities data={data}></MostPopularFacilities>
        {/* details Facilites */}
        <DetailsFacilities data={data}></DetailsFacilities>
        {/* House Rules */}
        <HouseRules data={data}></HouseRules>
      </div>

      {/* reviews */}
      <Reviews
        reviews={<ReviewsComp />}
        reviewsModal={<ReviewsModal />}
        reviewsLength={data1?.data?.reviews?.length}
      />

      {/* details map  */}
      <DetailsMapIndex />
      <section></section>
    </div>
  );
};

export default RoomDetails;
