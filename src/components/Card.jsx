const Card = ({ title, value, change }) => {
  return (
    <div className="tw-bg-white tw-shadow-md tw-rounded-2xl tw-p-5 tw-w-full">
      <h2 className="tw-text-gray-500 tw-text-sm">{title}</h2>

      <h1 className="tw-text-2xl tw-font-bold tw-mt-2 tw-text-gray-900">{value}</h1>

      <p
        className={`tw-mt-2 tw-text-sm ${
          change > 0 ? "tw-text-green-500" : "tw-text-red-500"
        }`}
      >
        {change > 0 ? `+${change}%` : `${change}%`} from last month
      </p>
    </div>
  );
};

export default Card;