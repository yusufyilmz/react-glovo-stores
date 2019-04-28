import React, { PureComponent } from 'react';
import { StoreCardWrapper, StoreCardMessageWrapper, StoreLabelListWrapper, StoreCardTitleWrapper, StoreCardSubTitleWrapper, StoreDetailWrapper } from './style';
import { StoreLabel } from './storeLabel';


class StoreCard extends PureComponent {

    render() {
        return <StoreCardWrapper open={this.props.item.open}>
            <div>
                <StoreCardTitleWrapper>
                    {this.props.item.name}
                </StoreCardTitleWrapper>
                <StoreCardSubTitleWrapper>
                    {this.props.item.description}
                </StoreCardSubTitleWrapper>
                <StoreDetailWrapper>
                    <StoreCardMessageWrapper>
                        {this.props.item.message}
                    </StoreCardMessageWrapper>
                    <StoreLabelListWrapper>
                        {this.props.item.tags.map(tag =>
                            <StoreLabel
                                key={`${tag}Key`}
                                label={tag} />)}
                    </StoreLabelListWrapper>
                </StoreDetailWrapper>
            </div>
        </StoreCardWrapper>
    }
}


export default StoreCard;