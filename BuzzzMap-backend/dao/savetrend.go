package dao

import (
	"context"
	"database/sql"

	"github.com/kikuchi0790/Buzzz_Map/BuzzzMap-backend/sqlc"
)

func (d *Dao) SaveTrend(ctx context.Context, tx *sql.Tx, trendName, trendLocation string, trendRank, trendEndtimestamp, trendIncreasepercentage int32) error {

	args := sqlc.SaveTrendParams{
		TrendsName:               trendName,
		TrendsLocation:           trendLocation,
		TrendsRank:               trendRank,
		TrendsEndtimestamp:       trendEndtimestamp,
		TrendsIncreasePercentage: trendIncreasepercentage,
	}

	return d.WithTx(tx).SaveTrend(ctx, args)
}
